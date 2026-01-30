# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Cloud - Recommended)

### Advantages
- ✅ Free tier available
- ✅ No local installation needed
- ✅ Works from anywhere
- ✅ Production-ready

### Setup Steps

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Click "Try Free"
   - Sign up with email or Google

2. **Create Cluster**
   - Choose "Shared" (Free tier)
   - Select your preferred region
   - Click "Create"
   - Wait 3-5 minutes for cluster creation

3. **Create Database User**
   - Go to "Database Access" (left sidebar)
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `hideout-admin` (or your choice)
   - Password: Generate a secure password (save it!)
   - User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" (left sidebar)
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"
   - Wait 2-3 minutes for changes to apply

5. **Get Connection String**
   - Go to "Database" (left sidebar)
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like:
     ```
     mongodb+srv://hideout-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

6. **Update Connection String**
   - Replace `<password>` with your actual password
   - Add database name: `/hideout-media` before the `?`
   - Final format:
     ```
     mongodb+srv://hideout-admin:yourpassword@cluster0.xxxxx.mongodb.net/hideout-media?retryWrites=true&w=majority
     ```

7. **Add to .env.local**
   ```env
   MONGODB_URI=mongodb+srv://hideout-admin:yourpassword@cluster0.xxxxx.mongodb.net/hideout-media?retryWrites=true&w=majority
   ```

### Troubleshooting Atlas

**Error: ECONNREFUSED**
- Check Network Access allows your IP
- Verify cluster is "Active" (not paused)
- Wait 2-3 minutes after adding IP address

**Error: Authentication Failed**
- Double-check username and password
- Ensure password has no special characters or URL-encode them
- Verify user has correct permissions

**Special Characters in Password**
If your password has special characters, URL-encode them:
- `@` → `%40`
- `!` → `%21`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`

Example:
- Password: `Pass@123!`
- Encoded: `Pass%40123%21`

---

## Option 2: Local MongoDB (Fastest for Development)

### Advantages
- ✅ Super fast connection
- ✅ Works offline
- ✅ No network issues
- ✅ Free

### Setup Steps

#### Windows

1. **Download MongoDB**
   - Go to https://www.mongodb.com/try/download/community
   - Select "Windows"
   - Download the MSI installer

2. **Install MongoDB**
   - Run the installer
   - Choose "Complete" installation
   - Install as a Windows Service (check the box)
   - Install MongoDB Compass (optional GUI)

3. **Verify Installation**
   ```powershell
   mongo --version
   ```

4. **Start MongoDB Service**
   - MongoDB should auto-start as a Windows Service
   - Check Services: Press Win+R → `services.msc` → Find "MongoDB"
   - Status should be "Running"

5. **Update .env.local**
   ```env
   MONGODB_URI=mongodb://localhost:27017/hideout-media
   ```

#### macOS

1. **Install via Homebrew**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

2. **Start MongoDB**
   ```bash
   brew services start mongodb-community
   ```

3. **Update .env.local**
   ```env
   MONGODB_URI=mongodb://localhost:27017/hideout-media
   ```

#### Linux (Ubuntu/Debian)

1. **Install MongoDB**
   ```bash
   sudo apt-get update
   sudo apt-get install -y mongodb
   ```

2. **Start MongoDB**
   ```bash
   sudo systemctl start mongodb
   sudo systemctl enable mongodb
   ```

3. **Update .env.local**
   ```env
   MONGODB_URI=mongodb://localhost:27017/hideout-media
   ```

---

## Testing Your Connection

After setting up either option:

1. **Restart Dev Server**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Test Connection**
   Visit: http://localhost:3000/api/seed

3. **Expected Success Response**
   ```json
   {
     "success": true,
     "message": "Database seeded successfully!",
     "stats": {
       "cities": 10,
       "categories": 4,
       "artists": 15
     }
   }
   ```

---

## Quick Comparison

| Feature | MongoDB Atlas | Local MongoDB |
|---------|---------------|---------------|
| Setup Time | 5-10 minutes | 2-5 minutes |
| Internet Required | Yes | No |
| Free Tier | 512MB | Unlimited |
| Production Ready | Yes | No |
| Best For | Deployment | Development |

---

## Recommended Approach

1. **For Development/Testing**: Start with Local MongoDB
2. **For Production/Deployment**: Use MongoDB Atlas

You can switch between them by just changing the `MONGODB_URI` in `.env.local`!

---

## Need Help?

**Still getting errors?**

1. Check `.env.local` exists in project root
2. Verify connection string format is correct
3. Restart dev server after changing `.env.local`
4. Check MongoDB service is running
5. For Atlas: Wait 2-3 minutes after IP whitelist changes

**Test MongoDB Connection Separately**

Create a test file `test-mongo.js`:
```javascript
const mongoose = require('mongoose');

const uri = 'your-connection-string-here';

mongoose.connect(uri)
  .then(() => {
    console.log('✅ MongoDB Connected!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });
```

Run: `node test-mongo.js`

