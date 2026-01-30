# 🚀 Quick Start - 5 Minutes to Launch

## Step 1: MongoDB Setup (2 minutes)

### Option A: MongoDB Atlas (Free Cloud - Easiest)
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" and sign up
3. Create a FREE cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@...`)

### Option B: Local MongoDB
```bash
# macOS
brew install mongodb-community
brew services start mongodb-community

# Connection string: mongodb://localhost:27017/hideout-media
```

## Step 2: Environment Setup (30 seconds)

Create `.env.local` file in project root:

```env
MONGODB_URI=your_connection_string_here
```

Paste your MongoDB connection string from Step 1.

## Step 3: Install & Run (1 minute)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Step 4: Seed Database (30 seconds)

Open your browser and visit:
```
http://localhost:3000/api/seed
```

You should see:
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

## Step 5: Explore! (1 minute)

### ✅ Homepage
```
http://localhost:3000
```

### ✅ Category Pages (Dynamic)
```
http://localhost:3000/book-comedian-delhi-ncr
http://localhost:3000/book-dj-musician-mumbai
http://localhost:3000/book-motivational-speaker-bangalore
```

### ✅ Artist Profiles
```
http://localhost:3000/artist/rahul-dua
http://localhost:3000/artist/gaurav-gupta
http://localhost:3000/artist/dr-vivek-bindra
```

### ✅ Admin Panel
```
http://localhost:3000/admin
```
- Add/Edit/Delete artists
- Filter by category and city
- View statistics

### ✅ Browse All
```
http://localhost:3000/browse
```
- See all category + city combinations

---

## 🎯 What You Get

### 📦 Pre-Loaded Content
- ✅ **15+ Real Indian Artists** (Rahul Dua, Gaurav Gupta, Dr. Vivek Bindra, etc.)
- ✅ **10+ Major Cities** (Delhi NCR, Mumbai, Bangalore, Pune, etc.)
- ✅ **4 Artist Categories** (Comedians, DJs, Speakers, Anchors)
- ✅ **40+ Dynamic Pages** (4 categories × 10 cities)

### 🎨 Features
- ✅ Beautiful UI with your brand colors
- ✅ Fully responsive design
- ✅ SEO optimized pages
- ✅ Admin panel for management
- ✅ RESTful APIs
- ✅ MongoDB integration

---

## 🎪 Test URLs

### Category + City Pages
```
/book-comedian-delhi-ncr
/book-comedian-mumbai
/book-comedian-bangalore
/book-dj-musician-delhi-ncr
/book-dj-musician-mumbai
/book-motivational-speaker-bangalore
/book-motivational-speaker-pune
/book-anchor-mumbai
/book-anchor-delhi-ncr
```

### Artist Profiles
```
/artist/rahul-dua
/artist/gaurav-gupta
/artist/aditi-mittal
/artist/jeeveshu-ahluwalia
/artist/dj-akhil-talreja
/artist/the-local-train-band
/artist/dr-vivek-bindra
/artist/gaur-gopal-das
/artist/rj-naved
/artist/gitikka-ganju-dhar
```

---

## 🔥 Admin Panel Features

At `/admin`:

1. **View All Artists**
   - Filter by category
   - Filter by city
   - See stats (total, featured, verified)

2. **Add New Artist**
   - Click "+ Add New Artist"
   - Fill comprehensive form
   - Auto-generates slug from name

3. **Manage Artists**
   - Edit artist details
   - Delete artists
   - Toggle featured/verified status

4. **Quick Actions**
   - Seed Database (reset & repopulate)
   - Clear filters
   - View statistics

---

## 🎨 Your Brand Colors

All maintained throughout:
- **Cream Background**: `#f8ddbf`
- **Dark Red/Brown**: `#2f0003`
- **Bright Red Accent**: `#ee0202`

---

## 📱 Responsive Design

Works perfectly on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop monitors

---

## 🚨 Troubleshooting

### Can't connect to MongoDB?
- Check your `.env.local` file exists
- Verify `MONGODB_URI` is correct
- Restart dev server: `npm run dev`

### No artists showing?
- Visit `/api/seed` to populate database
- Check MongoDB connection

### Page not found?
- Ensure database is seeded
- Check URL format: `/book-[category]-[city]`

---

## 🎉 You're All Set!

Your artist booking platform is now live with:
- ✅ 15+ artists across 4 categories
- ✅ 10+ cities covered
- ✅ 40+ dynamic pages generated
- ✅ Full admin panel
- ✅ Beautiful UI with your brand

**Start booking artists! 🎭🎵🎤**

---

## 📚 Need More Help?

Check out:
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `/admin` - Admin panel with all features

**Happy Booking! 🚀**

