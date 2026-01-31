import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Artist from "@/lib/models/Artist";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();

    const { slug } = await params;
    const artist = await Artist.findOne({ slug }).lean();

    if (!artist) {
      return NextResponse.json(
        { success: false, error: "Artist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: artist });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();

    const { slug } = await params;
    const body = await request.json();

    const artist = await Artist.findOneAndUpdate({ slug }, body, {
      new: true,
      runValidators: true,
    });

    if (!artist) {
      return NextResponse.json(
        { success: false, error: "Artist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: artist });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();

    const { slug } = await params;
    const artist = await Artist.findOneAndDelete({ slug });

    if (!artist) {
      return NextResponse.json(
        { success: false, error: "Artist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

