import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import City from "@/lib/models/City";

export async function GET() {
  try {
    await dbConnect();

    const cities = await City.find({}).sort({ popular: -1, name: 1 }).lean();

    return NextResponse.json({ success: true, data: cities });
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

    if (!body.slug) {
      body.slug = body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    const city = await City.create(body);

    return NextResponse.json({ success: true, data: city }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

