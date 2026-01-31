import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();

    // Test connection by checking if mongoose is connected
    const isConnected = mongoose.connection.readyState === 1;

    return NextResponse.json(
      { 
        ok: true, 
        message: "MongoDB connected via Mongoose",
        connected: isConnected,
        database: mongoose.connection.db?.databaseName || "N/A"
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[mongo-test] error connecting to MongoDB:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
