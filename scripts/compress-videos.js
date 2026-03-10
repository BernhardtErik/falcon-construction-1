#!/usr/bin/env node

/**
 * Video Compression Script
 *
 * This script compresses all videos in the public/videos/miche.videos directory
 * using FFmpeg to reduce file sizes while maintaining acceptable quality.
 *
 * Requirements:
 * - FFmpeg must be installed (https://ffmpeg.org/download.html)
 *
 * Usage:
 * - npx node scripts/compress-videos.js
 *
 * What it does:
 * - Reduces video resolution to 1920x1080 (if larger)
 * - Sets bitrate to 2000k for good quality/compression balance
 * - Converts videos to use libx264 codec (H.264)
 * - Overwrites original files with compressed versions
 * - Creates backup files with .bak extension
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const videosDir = path.join(__dirname, "../public/videos/miche.videos");

// Check if FFmpeg is installed
function checkFFmpeg() {
  try {
    execSync("ffmpeg -version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Compress a single video
function compressVideo(filePath) {
  const fileName = path.basename(filePath);
  const backupPath = filePath + ".bak";
  const tempPath = filePath + ".tmp.mp4";

  // Skip if already has backup (already compressed)
  if (fs.existsSync(backupPath)) {
    console.log(`⏭️  Skipping ${fileName} (already compressed)`);
    return;
  }

  try {
    console.log(`⏳ Compressing ${fileName}...`);

    // Get file size before
    const originalSize = fs.statSync(filePath).size;

    // Compression command
    // Using H.264 codec with moderate bitrate for good quality
    const command = `ffmpeg -i "${filePath}" -c:v libx264 -preset medium -b:v 2000k -c:a aac -b:a 128k -vf "scale=min(iw\\,1920):min(ih\\,1080):force_original_aspect_ratio=decrease" -y "${tempPath}"`;

    execSync(command, { stdio: "pipe" });

    // Get file size after
    const compressedSize = fs.statSync(tempPath).size;
    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);

    // Create backup and replace original
    fs.renameSync(filePath, backupPath);
    fs.renameSync(tempPath, filePath);

    const originalMB = (originalSize / 1024 / 1024).toFixed(2);
    const compressedMB = (compressedSize / 1024 / 1024).toFixed(2);

    console.log(
      `✅ Compressed ${fileName}: ${originalMB}MB → ${compressedMB}MB (${reduction}% reduction)`
    );
  } catch (error) {
    console.error(`❌ Error compressing ${fileName}:`, error.message);

    // Clean up temp file if exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

// Main function
async function main() {
  console.log("🎥 Video Compression Script\n");

  if (!checkFFmpeg()) {
    console.error(
      "❌ FFmpeg is not installed. Please install FFmpeg from https://ffmpeg.org/download.html"
    );
    console.error("\nFor Windows:");
    console.error(
      "- Download from: https://ffmpeg.org/download.html#build-windows"
    );
    console.error("- Or use: choco install ffmpeg (if you have Chocolatey)");
    console.error("\nFor Mac:");
    console.error("- brew install ffmpeg");
    console.error("\nFor Linux:");
    console.error("- sudo apt-get install ffmpeg");
    process.exit(1);
  }

  if (!fs.existsSync(videosDir)) {
    console.error(`❌ Videos directory not found: ${videosDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(videosDir);
  const videoFiles = files.filter(
    (f) =>
      f.toLowerCase().endsWith(".mp4") || f.toLowerCase().endsWith(".mov")
  );

  if (videoFiles.length === 0) {
    console.log("✅ No video files found to compress");
    return;
  }

  console.log(`📁 Found ${videoFiles.length} video files\n`);

  for (const file of videoFiles) {
    const filePath = path.join(videosDir, file);
    compressVideo(filePath);
  }

  console.log(
    "\n✅ Video compression complete! Backups saved with .bak extension"
  );
  console.log("💡 Tip: You can delete .bak files once you verify videos work");
}

main().catch(console.error);

