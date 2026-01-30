# 🎭 Hideout Media - Complete Setup Guide

## ✨ What Has Been Built

You now have a **full-featured artist booking platform** with:

### 🎯 Core Features
✅ **Dynamic Category Pages** - `/book-[category]-[city]` (e.g., `/book-comedian-delhi-ncr`)  
✅ **Individual Artist Profiles** - `/artist/[slug]` (e.g., `/artist/rahul-dua`)  
✅ **Admin Panel** - Full CRUD operations at `/admin`  
✅ **Database Seeding** - Pre-populated with 15+ real Indian artists  
✅ **MongoDB Integration** - Complete backend with Mongoose models  
✅ **RESTful APIs** - CRUD endpoints for artists, cities, categories  
✅ **SEO Optimized** - Dynamic metadata for all pages  

### 📦 Pre-Seeded Content

**15+ Artists Across 4 Categories:**
- **Comedians**: Rahul Dua, Gaurav Gupta, Aditi Mittal, Jeeveshu Ahluwalia
- **DJs/Musicians**: DJ Akhil Talreja, The Local Train Band, DJ Ruchir
- **Motivational Speakers**: Dr. Vivek Bindra, Gaur Gopal Das, Simerjeet Singh
- **Anchors**: RJ Naved, Gitikka Ganju Dhar, Siddharth Kannan

**10+ Cities:**
Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Jaipur

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Set Up MongoDB

**Option A: MongoDB Atlas (Free Cloud Database - Recommended)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a new cluster (select Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

**Option B: Local MongoDB**
```bash
# Install MongoDB locally
brew install mongodb-community  # macOS
# or follow instructions for your OS

# Start MongoDB
brew services start mongodb-community
# Connection string: mongodb://localhost:27017/hideout-media
```

### Step 2: Configure Environment

Create `.env.local` in your project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hideout-media?retryWrites=true&w=majority
```

Replace with your actual connection string from Step 1.

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 5: Seed the Database

Visit this URL in your browser:
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

**🎉 Done! Your platform is ready!**

---

## 📱 Test Your Platform

### Home Page
```
http://localhost:3000
```
- View transformed homepage with artist booking focus
- See featured artists and testimonials
- Contact form with budget ranges

### Category Pages (Dynamic)
```
http://localhost:3000/book-comedian-delhi-ncr
http://localhost:3000/book-dj-musician-mumbai
http://localhost:3000/book-motivational-speaker-bangalore
http://localhost:3000/book-anchor-pune
```

### Artist Profiles
```
http://localhost:3000/artist/rahul-dua
http://localhost:3000/artist/gaurav-gupta
http://localhost:3000/artist/dr-vivek-bindra
```

### Browse Page
```
http://localhost:3000/browse
```
- View all category + city combinations

### Admin Panel
```
http://localhost:3000/admin
```
- View all artists with filtering
- Add new artists
- Edit/Delete artists
- View statistics

---

## 🎨 Dynamic URL Patterns

Your platform automatically generates pages for all combinations:

### Pattern: `/book-[category]-[city]`

**Categories:**
- `comedian`
- `dj-musician`
- `motivational-speaker`
- `anchor`

**Cities:**
- `delhi-ncr`, `mumbai`, `bangalore`, `pune`, `hyderabad`, `chennai`, `kolkata`, `chandigarh`, `ahmedabad`, `jaipur`

**Examples:**
- `/book-comedian-delhi-ncr` ✓
- `/book-dj-musician-mumbai` ✓
- `/book-motivational-speaker-bangalore` ✓
- `/book-anchor-hyderabad` ✓

**Total Possible Pages:** 4 categories × 10 cities = **40 dynamic pages!**

---

## 👨‍💼 Using the Admin Panel

### Add New Artist

1. Go to `/admin`
2. Click "**+ Add New Artist**"
3. Fill in the form:
   - **Name**: Artist's full name
   - **Category**: Select from dropdown
   - **Short Description**: Max 200 characters
   - **Full Biography**: Detailed bio
   - **Cities**: Select multiple cities
   - **Price Range**: Min and max in rupees
   - **Specialties**: Comma separated (e.g., "Stand-up Comedy, Corporate Shows")
   - **Languages**: Comma separated (e.g., "Hindi, English")
   - **Experience**: Years of experience
   - **Total Shows**: Number of shows performed
   - **Rating**: 1-5 stars
   - **Featured**: Check to feature on homepage
   - **Verified**: Check for verified badge
4. Click "**Create Artist**"

### Filter Artists
- Use dropdowns to filter by category or city
- Click "Clear Filters" to reset

### Delete Artist
- Click "Delete" button next to artist
- Confirm deletion

### Re-seed Database
- Click "**Seed Database**" button
- Confirms before resetting all data

---

## 📊 API Documentation

### Artists API

#### Get All Artists
```http
GET /api/artists
Query Parameters:
  - category: string (comedian, dj-musician, etc.)
  - city: string (delhi-ncr, mumbai, etc.)
  - featured: boolean
  - limit: number (default: 20)
  - page: number (default: 1)

Example: /api/artists?category=comedian&city=delhi-ncr&featured=true
```

#### Get Single Artist
```http
GET /api/artists/[slug]
Example: /api/artists/rahul-dua
```

#### Create Artist
```http
POST /api/artists
Content-Type: application/json

Body: {
  "name": "Artist Name",
  "category": "comedian",
  "bio": "Full biography...",
  "shortDescription": "Brief description",
  "image": "/assets/shows-poster.png",
  "cities": ["delhi-ncr", "mumbai"],
  "priceRange": { "min": 50000, "max": 100000 },
  "specialties": ["Stand-up Comedy"],
  "languages": ["Hindi", "English"],
  "experience": 5,
  "totalShows": 100,
  "rating": 4.8,
  "featured": false,
  "verified": true
}
```

#### Update Artist
```http
PUT /api/artists/[slug]
Content-Type: application/json

Body: { fields to update }
```

#### Delete Artist
```http
DELETE /api/artists/[slug]
```

### Cities API
```http
GET /api/cities
POST /api/cities
```

### Categories API
```http
GET /api/categories
POST /api/categories
```

### Seed Database
```http
GET /api/seed
```

---

## 🎯 Database Models

### Artist Model
```typescript
{
  name: string;               // "Rahul Dua"
  slug: string;               // "rahul-dua" (auto-generated)
  category: string;           // "comedian", "dj-musician", etc.
  bio: string;                // Full biography
  shortDescription: string;   // Brief description (max 200 chars)
  image: string;              // Image URL
  cities: string[];           // ["delhi-ncr", "mumbai"]
  priceRange: {
    min: number;              // 50000
    max: number;              // 100000
  };
  specialties: string[];      // ["Stand-up Comedy", "Corporate Shows"]
  languages: string[];        // ["Hindi", "English"]
  experience: number;         // 8 (years)
  totalShows: number;         // 500
  rating: number;             // 4.9 (1-5 scale)
  reviews: [{
    clientName: string;
    review: string;
    rating: number;
    date: Date;
  }];
  socialMedia: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
    facebook?: string;
  };
  featured: boolean;          // Show on homepage
  verified: boolean;          // Verified badge
}
```

---

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variable:
     - Key: `MONGODB_URI`
     - Value: Your MongoDB connection string
   - Click "Deploy"

3. **Seed Production Database**
   - After deployment, visit: `https://your-domain.vercel.app/api/seed`

### Environment Variables Required
```
MONGODB_URI=your_mongodb_connection_string
```

---

## 🎨 Customization Guide

### Update Brand Colors

Edit `src/app/globals.css` and search for:
- `#f8ddbf` (cream background)
- `#2f0003` (dark red/brown)
- `#ee0202` (bright red accent)

### Add More Cities

1. Go to `/admin` (when built) or use API:
```javascript
POST /api/cities
{
  "name": "Goa",
  "slug": "goa",
  "state": "Goa",
  "description": "Beach paradise perfect for destination events",
  "popular": true
}
```

2. Re-seed or add manually

### Add More Categories

1. Use API:
```javascript
POST /api/categories
{
  "name": "Dancers",
  "slug": "dancer",
  "description": "Professional dancers for your events",
  "icon": "💃"
}
```

2. Update the category enum in `src/lib/models/Artist.ts`

### Change Images

Replace `/assets/shows-poster.png` with your own images or update the `image` field for each artist.

---

## 🔧 Troubleshooting

### Database Connection Error
```
Error: Could not connect to MongoDB
```
**Solution**: Check your `MONGODB_URI` in `.env.local`

### No Artists Showing
**Solution**: Visit `/api/seed` to populate database

### Dynamic Pages Not Working
**Solution**: Ensure MongoDB is connected and database is seeded

### TypeScript Errors
```bash
npm run build
```
Check for any type errors in the output

---

## 📈 Next Steps

### Recommended Enhancements

1. **Authentication**
   - Add NextAuth.js for admin panel security
   - Protect `/admin` routes

2. **Image Upload**
   - Integrate Cloudinary or AWS S3
   - Allow admins to upload artist photos

3. **Booking System**
   - Add booking request form
   - Email notifications with Resend or SendGrid

4. **Reviews System**
   - Allow clients to submit reviews
   - Admin approval workflow

5. **Search Functionality**
   - Add search bar for artists
   - Filter by multiple criteria

6. **Analytics**
   - Track page views
   - Monitor booking requests
   - Popular artists/cities

---

## 📞 Support

If you encounter any issues:

1. Check MongoDB connection
2. Verify environment variables
3. Review API responses in browser console
4. Check server logs in terminal

---

## 🎉 Success Checklist

- [ ] MongoDB connection established
- [ ] Database seeded successfully
- [ ] Homepage loads with artist categories
- [ ] Dynamic category pages working (e.g., `/book-comedian-delhi-ncr`)
- [ ] Individual artist pages load (e.g., `/artist/rahul-dua`)
- [ ] Admin panel accessible at `/admin`
- [ ] Can add new artists through admin panel
- [ ] All sections visible on homepage
- [ ] Contact form displays correctly

**Congratulations! Your artist booking platform is live! 🚀**

