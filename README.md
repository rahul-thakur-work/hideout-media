# Hideout Media - Artist Booking Platform

A comprehensive artist booking platform built with Next.js 14, MongoDB, and TypeScript. Book comedians, DJs, musicians, motivational speakers, and anchors across India.

## Features

### 🎭 Dynamic Artist Pages
- **Category Pages**: Browse artists by category (comedian, DJ/musician, motivational speaker, anchor)
- **City-Specific Pages**: Location-based artist discovery (e.g., `/book-comedian-delhi-ncr`)
- **Individual Artist Profiles**: Detailed profiles with bio, pricing, reviews, and social media

### 🗄️ Database & Seeding
- MongoDB integration with Mongoose
- Pre-seeded with 15+ real Indian artists (Rahul Dua, Gaurav Gupta, Dr. Vivek Bindra, etc.)
- 10+ major cities (Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, etc.)
- 4 artist categories with detailed descriptions

### 👨‍💼 Admin Panel
- Full CRUD operations for artists
- Filter by category and city
- Add new artists with comprehensive form
- View statistics and manage featured/verified status
- Access at `/admin`

### 🎨 Modern UI
- Beautiful brand color scheme (#f8ddbf, #2f0003, #ee0202)
- Responsive design for all devices
- Smooth animations and transitions
- SEO-optimized with dynamic metadata

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)

### Installation

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env.local` file in the root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Seed the Database**
   Start the development server and visit:
   ```
   http://localhost:3000/api/seed
   ```
   This will populate your database with sample artists, cities, and categories.

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── artists/           # Artist CRUD APIs
│   │   ├── cities/            # Cities API
│   │   ├── categories/        # Categories API
│   │   └── seed/              # Database seeding
│   ├── admin/                 # Admin panel
│   ├── artist/[slug]/         # Individual artist pages
│   ├── book-[category]-[city]/ # Dynamic category pages
│   ├── browse/                # Browse all combinations
│   └── page.tsx               # Home page
├── components/
│   ├── ArtistCategories.tsx
│   ├── TestimonialsSection.tsx
│   ├── WhyUsSection.tsx
│   └── ...
└── lib/
    ├── models/
    │   ├── Artist.ts
    │   ├── City.ts
    │   └── Category.ts
    └── mongodb.ts
```

## Dynamic Routing

### Category + City Pages
URL pattern: `/book-[category]-[city]`

Examples:
- `/book-comedian-delhi-ncr` - All comedians in Delhi NCR
- `/book-dj-musician-mumbai` - All DJs in Mumbai
- `/book-motivational-speaker-bangalore` - All speakers in Bangalore
- `/book-anchor-pune` - All anchors in Pune

### Individual Artist Pages
URL pattern: `/artist/[slug]`

Examples:
- `/artist/rahul-dua`
- `/artist/gaurav-gupta`
- `/artist/dr-vivek-bindra`

## Admin Panel Features

Access at `/admin`

- **Dashboard**: View all artists with filtering
- **Statistics**: Total artists, featured count, verified count, total shows
- **Add Artist**: Comprehensive form with all fields
- **Edit Artist**: (Coming soon - add edit functionality)
- **Delete Artist**: Remove artists from database
- **Seed Database**: Quick reset and repopulate

## Database Models

### Artist Schema
```typescript
{
  name: string
  slug: string (auto-generated)
  category: "comedian" | "dj-musician" | "motivational-speaker" | "anchor"
  bio: string
  shortDescription: string
  image: string
  cities: string[]
  priceRange: { min: number, max: number }
  specialties: string[]
  languages: string[]
  experience: number
  totalShows: number
  rating: number (1-5)
  reviews: Array<{clientName, review, rating, date}>
  socialMedia: {instagram?, youtube?, twitter?, facebook?}
  featured: boolean
  verified: boolean
}
```

### City Schema
```typescript
{
  name: string
  slug: string
  state: string
  description: string
  image: string
  popular: boolean
}
```

### Category Schema
```typescript
{
  name: string
  slug: string
  description: string
  icon: string
  image: string
}
```

## API Endpoints

### Artists
- `GET /api/artists` - Get all artists (with filters)
  - Query params: `category`, `city`, `featured`, `limit`, `page`
- `POST /api/artists` - Create new artist
- `GET /api/artists/[slug]` - Get single artist
- `PUT /api/artists/[slug]` - Update artist
- `DELETE /api/artists/[slug]` - Delete artist

### Cities
- `GET /api/cities` - Get all cities
- `POST /api/cities` - Create new city

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

### Seed
- `GET /api/seed` - Reset and seed database

## Pre-Seeded Artists

The database comes pre-seeded with 15+ real Indian artists:

**Comedians**: Rahul Dua, Gaurav Gupta, Aditi Mittal, Jeeveshu Ahluwalia

**DJs/Musicians**: DJ Akhil Talreja, The Local Train Band, DJ Ruchir

**Motivational Speakers**: Dr. Vivek Bindra, Gaur Gopal Das, Simerjeet Singh

**Anchors**: RJ Naved, Gitikka Ganju Dhar, Siddharth Kannan

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **Deployment Ready**: Vercel, Netlify, or any Node.js host

## Deployment

### MongoDB Setup
1. Create a MongoDB Atlas account (free tier available)
2. Create a new cluster
3. Get your connection string
4. Add to `.env.local` or environment variables in your hosting platform

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

Add `MONGODB_URI` environment variable in Vercel dashboard.

### After Deployment
Visit `/api/seed` to populate your production database.

## Future Enhancements

- [ ] User authentication for admin panel
- [ ] Booking request system with email notifications
- [ ] Payment integration
- [ ] Artist availability calendar
- [ ] Advanced search and filters
- [ ] Image upload for artists
- [ ] Review submission system
- [ ] Analytics dashboard

## License

MIT License - feel free to use this project for your own artist booking platform!

## Support

For issues or questions, create an issue in the repository.
