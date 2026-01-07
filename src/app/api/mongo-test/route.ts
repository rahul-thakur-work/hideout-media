import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // uses the default database from the connection string

    const result = await db.collection("test").insertOne({
      message: "Hello from MongoDB",
      createdAt: new Date(),
    });

    return NextResponse.json(
      { ok: true, insertedId: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("[mongo-test] error connecting to MongoDB:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}


