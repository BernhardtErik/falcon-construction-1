# ⚡ DEPLOYMENT QUICK REFERENCE

**Copy and paste these commands into your terminal.**

---

## 🚀 Standard Deployment (Recommended)

### All in One Command
```bash
npm run compress-videos && npm run build && npm run start
```

**What it does:**
1. Compresses all 21 videos (10-30 min)
2. Builds for production (2-5 min)
3. Starts the server (ready immediately)

**Time:** ~20-45 minutes total

---

## 📋 Step-by-Step (If You Prefer)

### Command 1: Compress Videos
```bash
npm run compress-videos
```
**First time only.** Compresses all 21 videos. Takes 10-30 minutes.

### Command 2: Build for Production
```bash
npm run build
```
**Always run before deploying.** Takes 2-5 minutes.

### Command 3: Start Server
```bash
npm run start
```
**Starts the live server.** Visit: http://localhost:3000

---

## 🔄 After Changes (Subsequent Deployments)

### If You Changed Code (No New Videos)
```bash
npm run build && npm run start
```

### If You Added New Videos
```bash
npm run compress-videos && npm run build && npm run start
```

---

## 🧪 Test Before Deploying

### Development (With Auto-Reload)
```bash
npm run dev
```
Visit: http://localhost:3000

### Production (Real Test)
```bash
npm run build && npm run start
```
Visit: http://localhost:3000

---

## ☁️ Deploy to Vercel (Best for Next.js)

### One-Time Setup
```bash
npm i -g vercel
vercel
```

### Auto Deploy on Git Push
```bash
git add .
git commit -m "Deploy compressed videos"
git push
```

---

## 📍 Port Already in Use?

### Use Different Port
```bash
PORT=3001 npm run start
```

Or change the port in `.env.local`:
```
PORT=3001
```

---

## 🧹 Clean Build (If Issues)

### Clear Cache and Rebuild
```bash
rm -r .next
npm run build
npm run start
```

---

## ✅ Verify Deployment

After running `npm run start`:

1. **Open Browser:**
   ```
   http://localhost:3000
   ```

2. **Test Videos:**
   - Click through all video buttons
   - Check they load quickly
   - Verify quality looks good

3. **Check DevTools (F12):**
   - Network tab
   - Videos should be 100-150 MB
   - Load time should be < 5 seconds

4. **Check Console:**
   - No red errors
   - Green checkmarks for loaded resources

---

## 🎯 Most Common Workflow

```bash
# First time:
npm run compress-videos

# Then:
npm run build

# Finally:
npm run start

# Visit:
http://localhost:3000
```

---

## 📚 More Details

For complete deployment guide, see: `DEPLOY_COMMANDS.md`

For compression help: `COMPRESS_VIDEOS_QUICKSTART.md`

For troubleshooting: `TROUBLESHOOTING.md`

---

**Your compressed videos are ready to deploy!** 🚀

