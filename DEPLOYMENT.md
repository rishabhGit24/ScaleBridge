# Deployment Guide for Vercel

## Option 1: Deploy Frontend and Backend Separately (Recommended)

### Step 1: Deploy Backend (API)

1. **Create a new Vercel project for the backend:**

   ```bash
   cd server
   vercel
   ```

2. **Set environment variables in Vercel Dashboard:**
   - Go to your project settings
   - Add environment variable:
     - `MONGODB_URI` = `mongodb+srv://rishabhbr18_db_user:PuzYMJ38Nn4Pyf2u@cluster0.nzo3fwp.mongodb.net/?appName=Cluster0`

3. **Note the deployed URL** (e.g., `https://scalebridge-api.vercel.app`)

### Step 2: Deploy Frontend

1. **Update the API URL in `src/config.js`:**

   ```javascript
   export const API_URL = import.meta.env.PROD
     ? "https://your-backend-url.vercel.app/api" // Replace with actual backend URL
     : "http://localhost:5000/api";
   ```

2. **Deploy frontend:**

   ```bash
   # From root directory
   vercel
   ```

3. **Configure build settings in Vercel:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

---

## Option 2: Deploy as Monorepo (Single Project)

### Step 1: Push to GitHub

1. **Initialize git (if not already):**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository and push:**
   ```bash
   git remote add origin https://github.com/yourusername/scalebridge.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and import your GitHub repository**

2. **Configure project settings:**
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variables:**
   - `MONGODB_URI` = `mongodb+srv://rishabhbr18_db_user:PuzYMJ38Nn4Pyf2u@cluster0.nzo3fwp.mongodb.net/?appName=Cluster0`

4. **Deploy!**

---

## Important Notes

### CORS Configuration

The backend is already configured with CORS enabled for all origins. For production, you should restrict this:

```javascript
// In server/index.js
app.use(
  cors({
    origin: "https://your-frontend-url.vercel.app",
  }),
);
```

### Environment Variables

Never commit `.env` files to Git. Always set them in Vercel Dashboard:

- Project Settings → Environment Variables

### MongoDB Atlas

Make sure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) or add Vercel's IP addresses to the whitelist.

### Testing

After deployment:

1. Test the contact form
2. Check MongoDB Atlas to verify data is being saved
3. Monitor Vercel logs for any errors

---

## Recommended Approach

**I recommend Option 1 (Separate Deployments)** because:

- Easier to manage and debug
- Better separation of concerns
- Independent scaling
- Clearer deployment process

### Quick Deploy Commands:

**Backend:**

```bash
cd server
vercel --prod
```

**Frontend:**

```bash
# Update src/config.js with backend URL first
vercel --prod
```

---

## Troubleshooting

### Issue: API calls failing

- Check CORS settings
- Verify environment variables are set
- Check Vercel function logs

### Issue: MongoDB connection errors

- Verify MongoDB Atlas IP whitelist
- Check connection string in environment variables
- Ensure database user has correct permissions

### Issue: Build failures

- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check build logs in Vercel dashboard
