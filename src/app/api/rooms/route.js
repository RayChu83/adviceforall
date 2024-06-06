import dbConnect from "@/lib/db";
import { Room } from "@/models";
import { NextResponse } from "next/server";
import { createClient } from "pexels";

export async function GET(req) {
  try {
    await dbConnect();
    const rooms = await Room.find();
    return NextResponse.json({ rooms }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const data = await req.json();
    if (!data.name) {
      return NextResponse.json(
        { message: "Invalid fields. Please try again" },
        { status: 422 }
      );
    }

    const pexelsClient = createClient(process.env.PEXELS_API_KEY);
    const { photos } = await pexelsClient.photos.search({
      query: data.name,
      per_page: 1,
    });
    const room = await Room.create({ ...data, banner: photos[0] });
    return NextResponse.json({ room }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
