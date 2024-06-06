import dbConnect from "@/lib/db";
import { Room } from "@/models";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const rooms = await Room.find().limit(3);
    return NextResponse.json({ rooms }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
