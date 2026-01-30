import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Artist from "@/lib/models/Artist";

export async function GET(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const city = searchParams.get("city");
    const featured = searchParams.get("featured");
    const limit = parseInt(searchParams.get("limit") || "20");
    const page = parseInt(searchParams.get("page") || "1");

    const query: any = {};

    if (category) {
      query.category = category;
    }

    if (city) {
      query.cities = city.toLowerCase();
    }

    if (featured === "true") {
      query.featured = true;
    }

    const skip = (page - 1) * limit;

    const artists = await Artist.find(query)
      .sort({ rating: -1, totalShows: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    const total = await Artist.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: artists,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();

    // Generate slug from name
    if (!body.slug) {
      body.slug = body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    const artist = await Artist.create(body);

    return NextResponse.json(
      { success: true, data: artist },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

