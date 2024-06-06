import dbConnect from "@/lib/db";
import { Room } from "@/models";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
  try {
    await dbConnect();
    const room = await Room.findById(id);
    if (!room) throw new Error();
    return NextResponse.json({ room }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
