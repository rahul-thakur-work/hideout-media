import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Artist from "@/lib/models/Artist";
import City from "@/lib/models/City";
import Category from "@/lib/models/Category";

// Real Indian Artist Data (Based on popular Indian entertainers)
const seedData = {
  cities: [
    {
      name: "Delhi NCR",
      slug: "delhi-ncr",
      state: "Delhi",
      description:
        "The capital region with a thriving entertainment scene. From corporate events in Gurgaon to wedding celebrations in Noida, we have top artists for every occasion.",
      popular: true,
    },
    {
      name: "Mumbai",
      slug: "mumbai",
      state: "Maharashtra",
      description:
        "The entertainment capital of India. Book the best comedians, DJs, and anchors for your Mumbai events. We cover all areas including Navi Mumbai and Thane.",
      popular: true,
    },
    {
      name: "Bangalore",
      slug: "bangalore",
      state: "Karnataka",
      description:
        "Silicon Valley of India with a vibrant corporate events scene. Perfect for tech company celebrations, startup parties, and professional gatherings.",
      popular: true,
    },
    {
      name: "Pune",
      slug: "pune",
      state: "Maharashtra",
      description:
        "Cultural hub with diverse entertainment needs. We provide artists for college fests, corporate events, and private celebrations across Pune.",
      popular: true,
    },
    {
      name: "Hyderabad",
      slug: "hyderabad",
      state: "Telangana",
      description:
        "Growing IT hub with increasing demand for quality entertainment. Book artists for your Hyderabad events at competitive prices.",
      popular: true,
    },
    {
      name: "Chennai",
      slug: "chennai",
      state: "Tamil Nadu",
      description:
        "Cultural capital of South India. We provide bilingual and multilingual artists for diverse Chennai audiences.",
      popular: true,
    },
    {
      name: "Kolkata",
      slug: "kolkata",
      state: "West Bengal",
      description:
        "City of joy with rich cultural heritage. Book artists for your Kolkata events, from Durga Puja celebrations to corporate galas.",
      popular: true,
    },
    {
      name: "Chandigarh",
      slug: "chandigarh",
      state: "Chandigarh",
      description:
        "Beautiful planned city with growing entertainment demand. We serve Chandigarh, Mohali, and Panchkula.",
      popular: false,
    },
    {
      name: "Ahmedabad",
      slug: "ahmedabad",
      state: "Gujarat",
      description:
        "Commercial hub of Gujarat. Book artists for Navratri celebrations, corporate events, and weddings in Ahmedabad.",
      popular: false,
    },
    {
      name: "Jaipur",
      slug: "jaipur",
      state: "Rajasthan",
      description:
        "Pink city with grand celebration culture. Perfect for destination weddings and cultural events.",
      popular: false,
    },
  ],
  categories: [
    {
      name: "Comedians",
      slug: "comedian",
      description:
        "Book the best stand-up comedians in India for your events. From corporate shows to wedding entertainment, our comedians deliver laughter guaranteed.",
      icon: "😂",
    },
    {
      name: "DJs & Musicians",
      slug: "dj-musician",
      description:
        "Hire professional DJs, musicians, and live bands for your events. We cover all genres from Bollywood to EDM, Rock to Classical.",
      icon: "🎵",
    },
    {
      name: "Motivational Speakers",
      slug: "motivational-speaker",
      description:
        "Book inspiring motivational speakers for your corporate events, conferences, and team building sessions.",
      icon: "💡",
    },
    {
      name: "Anchors & Emcees",
      slug: "anchor",
      description:
        "Professional anchors and emcees to host your events seamlessly. Fluent, charismatic, and experienced.",
      icon: "🎤",
    },
  ],
  artists: [
    // COMEDIANS
    {
      name: "Rahul Dua",
      slug: "rahul-dua",
      category: "comedian",
      bio: "Rahul Dua is one of India's most popular stand-up comedians known for his relatable humor about everyday life, relationships, and cultural observations. With his unique storytelling style and impeccable comic timing, he has performed over 500 shows across India and internationally. His content ranges from observational comedy to satirical takes on modern Indian society.",
      shortDescription:
        "Popular stand-up comedian known for relatable humor and storytelling",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "mumbai", "bangalore", "pune", "hyderabad"],
      priceRange: { min: 75000, max: 150000 },
      specialties: [
        "Stand-up Comedy",
        "Corporate Shows",
        "Wedding Entertainment",
        "College Events",
      ],
      languages: ["Hindi", "English"],
      experience: 8,
      totalShows: 500,
      rating: 4.9,
      reviews: [
        {
          clientName: "Priya Sharma - Tech Corp",
          review:
            "Rahul was absolutely hilarious! Our team couldn't stop laughing. Professional and engaging throughout.",
          rating: 5,
          date: new Date("2024-01-15"),
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/rahuldua",
        youtube: "https://youtube.com/@rahuldua",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Gaurav Gupta",
      slug: "gaurav-gupta",
      category: "comedian",
      bio: "Gaurav Gupta is a seasoned stand-up comedian and writer who brings sharp wit and clever observations to the stage. Known for his clean comedy that appeals to all age groups, he specializes in corporate events and has entertained audiences at companies like Google, Amazon, and Flipkart. His comedy style is intelligent, relatable, and perfectly suited for professional environments.",
      shortDescription:
        "Clean comedy specialist perfect for corporate events",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "mumbai", "bangalore", "chandigarh"],
      priceRange: { min: 50000, max: 100000 },
      specialties: [
        "Corporate Comedy",
        "Clean Humor",
        "Team Building Events",
        "Product Launches",
      ],
      languages: ["Hindi", "English"],
      experience: 10,
      totalShows: 600,
      rating: 4.8,
      reviews: [
        {
          clientName: "Ankit Malhotra - Event Manager",
          review:
            "Professional, punctual, and extremely funny. Perfect for our corporate audience!",
          rating: 5,
          date: new Date("2024-02-10"),
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/gauravguptacomedy",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Aditi Mittal",
      slug: "aditi-mittal",
      category: "comedian",
      bio: "Aditi Mittal is India's premier female stand-up comedian, known for her bold, unapologetic comedy that tackles social issues, gender dynamics, and Indian culture with razor-sharp wit. As a pioneer in the Indian comedy scene, she has inspired countless comedians and performed internationally. Her comedy is thought-provoking, hilarious, and pushes boundaries.",
      shortDescription:
        "Bold and brilliant female comedian breaking barriers",
      image: "/assets/shows-poster.png",
      cities: ["mumbai", "delhi-ncr", "bangalore", "pune"],
      priceRange: { min: 100000, max: 200000 },
      specialties: [
        "Stand-up Comedy",
        "Social Commentary",
        "Women's Events",
        "Corporate Shows",
      ],
      languages: ["English", "Hindi"],
      experience: 12,
      totalShows: 700,
      rating: 4.9,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/aditimittal",
        youtube: "https://youtube.com/@aditimittal",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Jeeveshu Ahluwalia",
      slug: "jeeveshu-ahluwalia",
      category: "comedian",
      bio: "Jeeveshu Ahluwalia is known for his energetic stage presence and hilarious takes on North Indian culture, food, and family dynamics. His comedy is high-energy, relatable, and perfect for audiences who love Punjabi humor mixed with universal observations. He's a crowd favorite at weddings and celebrations.",
      shortDescription: "High-energy comedian perfect for wedding entertainment",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "chandigarh", "jaipur", "pune"],
      priceRange: { min: 60000, max: 120000 },
      specialties: [
        "Wedding Comedy",
        "Punjabi Humor",
        "Family Shows",
        "Cultural Comedy",
      ],
      languages: ["Hindi", "Punjabi", "English"],
      experience: 9,
      totalShows: 450,
      rating: 4.7,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/jeeveshu",
      },
      featured: true,
      verified: true,
    },

    // DJs & MUSICIANS
    {
      name: "DJ Akhil Talreja",
      slug: "dj-akhil-talreja",
      category: "dj-musician",
      bio: "DJ Akhil Talreja is one of India's most sought-after wedding DJs, known for creating electric atmospheres that keep dance floors packed all night. With expertise in Bollywood, Punjabi, EDM, and international hits, he reads the crowd perfectly and delivers seamless transitions. He has performed at over 800 weddings across India and internationally.",
      shortDescription:
        "Premier wedding DJ specializing in multi-genre entertainment",
      image: "/assets/shows-poster.png",
      cities: ["mumbai", "delhi-ncr", "bangalore", "pune", "hyderabad"],
      priceRange: { min: 80000, max: 250000 },
      specialties: [
        "Wedding DJ",
        "Bollywood",
        "Punjabi Beats",
        "EDM",
        "International Hits",
      ],
      languages: ["Hindi", "English"],
      experience: 12,
      totalShows: 800,
      rating: 4.9,
      reviews: [
        {
          clientName: "Rohan & Priya - Wedding",
          review:
            "DJ Akhil made our wedding unforgettable! The energy was incredible from start to finish.",
          rating: 5,
          date: new Date("2024-01-20"),
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/djakhiltalreja",
      },
      featured: true,
      verified: true,
    },
    {
      name: "The Local Train Band",
      slug: "the-local-train-band",
      category: "dj-musician",
      bio: "The Local Train is one of India's most popular indie rock bands, known for their powerful Hindi rock songs that resonate with youth across the country. Their high-energy performances and soulful lyrics make them perfect for college fests, corporate events, and music festivals. They bring authenticity and raw talent to every stage.",
      shortDescription: "Iconic indie rock band for high-energy live performances",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "mumbai", "bangalore", "pune", "chandigarh"],
      priceRange: { min: 300000, max: 800000 },
      specialties: [
        "Live Band",
        "Hindi Rock",
        "College Fests",
        "Music Festivals",
        "Corporate Events",
      ],
      languages: ["Hindi", "English"],
      experience: 10,
      totalShows: 300,
      rating: 4.8,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/thelocaltrain",
        youtube: "https://youtube.com/@thelocaltrain",
      },
      featured: true,
      verified: true,
    },
    {
      name: "DJ Ruchir",
      slug: "dj-ruchir",
      category: "dj-musician",
      bio: "DJ Ruchir specializes in corporate events and private parties, bringing sophisticated music curation and seamless mixing. His ability to adapt to different audiences and create the perfect ambiance makes him a favorite for brand launches, corporate galas, and upscale celebrations.",
      shortDescription: "Sophisticated DJ for corporate and private events",
      image: "/assets/shows-poster.png",
      cities: ["bangalore", "mumbai", "hyderabad", "pune"],
      priceRange: { min: 50000, max: 150000 },
      specialties: [
        "Corporate Events",
        "Product Launches",
        "Private Parties",
        "Lounge Music",
        "House Music",
      ],
      languages: ["English", "Hindi"],
      experience: 8,
      totalShows: 400,
      rating: 4.7,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/djruchir",
      },
      featured: false,
      verified: true,
    },

    // MOTIVATIONAL SPEAKERS
    {
      name: "Dr. Vivek Bindra",
      slug: "dr-vivek-bindra",
      category: "motivational-speaker",
      bio: "Dr. Vivek Bindra is one of India's top motivational speakers and business coach, known for his high-energy sessions that inspire and transform. With a YouTube following in millions, he specializes in leadership development, entrepreneurship, and sales motivation. His sessions are packed with actionable insights, real-world case studies, and strategies for success.",
      shortDescription:
        "Top motivational speaker for leadership and business growth",
      image: "/assets/shows-poster.png",
      cities: [
        "delhi-ncr",
        "mumbai",
        "bangalore",
        "pune",
        "hyderabad",
        "chennai",
      ],
      priceRange: { min: 200000, max: 500000 },
      specialties: [
        "Leadership Development",
        "Entrepreneurship",
        "Sales Training",
        "Business Strategy",
        "Team Motivation",
      ],
      languages: ["Hindi", "English"],
      experience: 15,
      totalShows: 1000,
      rating: 4.9,
      reviews: [
        {
          clientName: "Rajesh Kumar - CEO",
          review:
            "Dr. Bindra's session was transformational for our team. Highly recommended!",
          rating: 5,
          date: new Date("2024-01-05"),
        },
      ],
      socialMedia: {
        youtube: "https://youtube.com/@drvivekbindra",
        instagram: "https://instagram.com/drvivekbindra",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Gaur Gopal Das",
      slug: "gaur-gopal-das",
      category: "motivational-speaker",
      bio: "Gaur Gopal Das is a renowned lifestyle coach and motivational speaker who beautifully blends ancient wisdom with modern life challenges. His talks on work-life balance, relationships, and personal growth resonate deeply with corporate audiences. With his calm demeanor and profound insights, he inspires positive change.",
      shortDescription:
        "Lifestyle coach and speaker on work-life balance and personal growth",
      image: "/assets/shows-poster.png",
      cities: ["mumbai", "pune", "bangalore", "delhi-ncr", "ahmedabad"],
      priceRange: { min: 250000, max: 600000 },
      specialties: [
        "Work-Life Balance",
        "Personal Development",
        "Relationship Building",
        "Stress Management",
        "Mindfulness",
      ],
      languages: ["English", "Hindi"],
      experience: 20,
      totalShows: 800,
      rating: 5.0,
      reviews: [],
      socialMedia: {
        youtube: "https://youtube.com/@gaurgopaldasofficial",
        instagram: "https://instagram.com/gaurgopaldasofficial",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Simerjeet Singh",
      slug: "simerjeet-singh",
      category: "motivational-speaker",
      bio: "Simerjeet Singh is a dynamic motivational speaker specializing in youth empowerment, goal setting, and overcoming adversity. His energetic delivery and relatable stories make him perfect for college events, startup gatherings, and young professional audiences.",
      shortDescription:
        "Youth motivational speaker for colleges and startups",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "chandigarh", "jaipur", "bangalore"],
      priceRange: { min: 50000, max: 150000 },
      specialties: [
        "Youth Empowerment",
        "Goal Setting",
        "College Motivation",
        "Career Guidance",
        "Success Stories",
      ],
      languages: ["Hindi", "English", "Punjabi"],
      experience: 8,
      totalShows: 350,
      rating: 4.7,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/simerjeetsingh",
      },
      featured: false,
      verified: true,
    },

    // ANCHORS & EMCEES
    {
      name: "Rj Naved",
      slug: "rj-naved",
      category: "anchor",
      bio: "RJ Naved is one of India's most popular radio jockeys turned event anchor, known for his witty humor and spontaneous hosting style. With decades of experience in entertaining audiences, he brings energy, professionalism, and star power to every event. Perfect for high-profile corporate events, award shows, and weddings.",
      shortDescription:
        "Celebrity anchor and RJ for high-profile events",
      image: "/assets/shows-poster.png",
      cities: ["mumbai", "delhi-ncr", "bangalore", "pune"],
      priceRange: { min: 150000, max: 400000 },
      specialties: [
        "Corporate Events",
        "Award Shows",
        "Product Launches",
        "Wedding Hosting",
        "Conferences",
      ],
      languages: ["Hindi", "English"],
      experience: 25,
      totalShows: 1200,
      rating: 4.9,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/rjnaved",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Gitikka Ganju Dhar",
      slug: "gitikka-ganju-dhar",
      category: "anchor",
      bio: "Gitikka Ganju Dhar is a professional emcee and corporate anchor known for her eloquent hosting and ability to engage diverse audiences. With experience anchoring international conferences, corporate galas, and fashion shows, she brings sophistication and polish to every event.",
      shortDescription:
        "Professional emcee for corporate and international events",
      image: "/assets/shows-poster.png",
      cities: ["delhi-ncr", "mumbai", "bangalore", "hyderabad"],
      priceRange: { min: 80000, max: 200000 },
      specialties: [
        "Corporate Conferences",
        "International Events",
        "Fashion Shows",
        "Galas",
        "Panel Moderation",
      ],
      languages: ["English", "Hindi"],
      experience: 12,
      totalShows: 600,
      rating: 4.8,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/gitikkaganjudhar",
      },
      featured: true,
      verified: true,
    },
    {
      name: "Siddharth Kannan",
      slug: "siddharth-kannan",
      category: "anchor",
      bio: "Siddharth Kannan is a versatile anchor and entertainment journalist who brings energy and engagement to every event. From Bollywood award shows to corporate events, his charismatic personality and quick wit make him a crowd favorite.",
      shortDescription: "Energetic anchor for entertainment and corporate events",
      image: "/assets/shows-poster.png",
      cities: ["mumbai", "pune", "delhi-ncr", "bangalore"],
      priceRange: { min: 100000, max: 250000 },
      specialties: [
        "Award Shows",
        "Entertainment Events",
        "Corporate Hosting",
        "Celebrity Interviews",
        "Music Events",
      ],
      languages: ["Hindi", "English"],
      experience: 15,
      totalShows: 800,
      rating: 4.8,
      reviews: [],
      socialMedia: {
        instagram: "https://instagram.com/siddharthkannan",
      },
      featured: false,
      verified: true,
    },
  ],
};

export async function GET() {
  try {
    await dbConnect();

    // Clear existing data
    await Artist.deleteMany({});
    await City.deleteMany({});
    await Category.deleteMany({});

    // Seed cities
    await City.insertMany(seedData.cities);

    // Seed categories
    await Category.insertMany(seedData.categories);

    // Seed artists
    await Artist.insertMany(seedData.artists);

    const stats = {
      cities: await City.countDocuments(),
      categories: await Category.countDocuments(),
      artists: await Artist.countDocuments(),
    };

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully!",
      stats,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

