# 🚀 Deployment Commands - Complete Guide

## Quick Deploy Commands

### One-Line Full Deployment (Recommended)
```bash
npm run compress-videos && npm run build && npm run start
```

This does everything in sequence:
1. Compresses all videos (10-30 min)
2. Builds for production (2-5 min)
3. Starts the server (ready to use)

---

## Step-by-Step Deployment Commands

### Step 1: Compress Videos (FIRST TIME ONLY)
```bash
npm run compress-videos
```
- Compresses all 21 videos
- Creates backups (.bak files)
- Takes 10-30 minutes
- Shows progress for each video
- **Only run this once** (unless you want to recompress)

### Step 2: Build for Production
```bash
npm run build
```
- Compiles Next.js project
- Optimizes code
- Prepares for deployment
- Creates `.next` folder
- Takes 2-5 minutes

### Step 3: Start Production Server
```bash
npm run start
```
- Starts the production server
- Website is now live
- Listens on port 3000 by default
- Ready for users to visit

---

## Common Deployment Scenarios

### Scenario A: First Time Deploying With Compression
```bash
# Step 1: Compress videos (one-time)
npm run compress-videos

# Wait for completion, then:

# Step 2: Build for production
npm run build

# Step 3: Start server
npm run start

# Website is now live at http://localhost:3000
```

### Scenario B: Redeploying (After Code Changes)
```bash
# If you made code changes but NOT new videos:
npm run build && npm run start

# If you added new videos:
npm run compress-videos && npm run build && npm run start
```

### Scenario C: Development Testing Before Deploy
```bash
# Test locally first
npm run dev

# Then when ready for production:
npm run build && npm run start
```

---

## Production Deployment (Beyond Local)

### If Hosting on Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel (one-time setup)
vercel

# Automatic deployments on git push
git add .
git commit -m "Deploy with compressed videos"
git push
```

### If Hosting on Other Servers
```bash
# 1. Build locally
npm run build

# 2. Copy to server
scp -r .next package.json public/ user@server:/path/to/app/

# 3. On server, install and start
npm install --production
npm run start
```

### If Using Docker
```bash
# Build Docker image
docker build -t falcon-construction .

# Run container
docker run -p 3000:3000 falcon-construction
```

---

## Testing Before Deployment

### Test Development Version
```bash
npm run dev
```
- Opens http://localhost:3000
- Hot reload enabled
- For testing during development

### Test Production Version Locally
```bash
npm run build
npm run start
```
- Exactly like production
- No hot reload
- Tests actual performance
- Recommended before deploying!

---

## Verification Checklist

After running deployment commands:

- [ ] `npm run compress-videos` completed successfully
- [ ] Video files are now 100-150 MB (check: `ls ./public/videos/miche.videos/`)
- [ ] `npm run build` completed with no errors
- [ ] `npm run start` server is running
- [ ] Open browser to http://localhost:3000
- [ ] Homepage loads quickly
- [ ] Click through all video buttons
- [ ] All 21 videos play correctly
- [ ] Video quality looks good
- [ ] No console errors (F12 → Console)
- [ ] DevTools Network tab shows smaller files

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -r .next
npm run build
```

### Server won't start
```bash
# Check if port 3000 is in use
# Try different port:
PORT=3001 npm run start
```

### Videos still not compressed
```bash
# Verify compression ran
ls -lh ./public/videos/miche.videos/IMG_2174.MP4

# If still large (>200 MB), recompress:
npm run compress-videos
```

### Out of disk space during compression
```bash
# Free up space (need ~2x video size)
# Then try again:
npm run compress-videos
```

---

## Full Command Reference

| Command | Purpose | Time | When to Use |
|---------|---------|------|-------------|
| `npm run dev` | Dev server with hot reload | - | During development |
| `npm run compress-videos` | Compress all videos | 10-30 min | First time or with new videos |
| `npm run build` | Build for production | 2-5 min | Before deploying |
| `npm run start` | Start production server | - | After build, before deployment |
| `npm run lint` | Check code quality | 1-2 min | Before deployment |

---

## Recommended Deployment Workflow

### Step 1: Compress (First Time)
```bash
npm run compress-videos
# Wait for completion
```

### Step 2: Test Locally
```bash
npm run build
npm run start
# Open http://localhost:3000
# Test all features
```

### Step 3: Verify Videos
```bash
# Open DevTools (F12)
# Go to Network tab
# Reload page
# Check file sizes are 100-150 MB
```

### Step 4: Deploy to Production
```bash
# If using Vercel:
git add .
git commit -m "Deploy with compressed videos"
git push

# If using other hosting:
# Follow your host's deployment instructions
```

### Step 5: Verify in Production
```bash
# Visit your live website
# Test all videos
# Check performance in DevTools
```

---

## Environment Variables (If Needed)

Create `.env.local` file for local settings:
```bash
# Port (optional, default 3000)
PORT=3000

# Environment
NODE_ENV=production
```

---

## Performance Tips After Deployment

1. **Monitor Performance**
   - Use Chrome DevTools Network tab
   - Check Lighthouse scores
   - Monitor load times

2. **Cache Management**
   - Browser caches videos automatically
   - Consider adding Cache-Control headers
   - CDN can improve performance further

3. **Optional: Use CDN**
   - Cloudflare Stream
   - Bunny CDN
   - AWS CloudFront
   - These auto-optimize further

---

## Quick Copy-Paste Commands

### For First Deployment (Copy & Paste)
```bash
npm run compress-videos && npm run build && npm run start
```

### For Redeployment (Code changes only)
```bash
npm run build && npm run start
```

### For Testing Before Deploy
```bash
npm run build && npm run start
# Then open http://localhost:3000
```

---

## Summary

**Most Common:**
```bash
npm run compress-videos  # First time only
npm run build
npm run start
```

**Then visit:** http://localhost:3000 to see your fast website! 🚀

---

## Need Help?

- **Compression issues?** → See `TROUBLESHOOTING.md`
- **Deployment issues?** → Check build errors with `npm run build`
- **Videos not working?** → Check `PERFORMANCE_MONITORING.md`
- **General questions?** → Read `START_HERE.md`

Your website with compressed videos is ready to deploy! 🎬

