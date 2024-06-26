import { getBlurredPhoto } from "@/app/actions/getBlurredPhoto";
import dbConnect from "@/lib/db";
import { Room } from "@/models";
import { NextResponse } from "next/server";
import { createClient } from "pexels";

export const dynamic = "force-dynamic";
export async function GET(req) {
  try {
    await dbConnect();
    const rooms = await Room.find().populate({
      path: "responses",
    });
    return NextResponse.json({ rooms }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again!" },
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
    const photo = photos[0];
    photo.src.panorama = `https://images.pexels.com/photos/${String(
      photo.id
    )}/pexels-photo-${String(
      photo.id
    )}.jpeg?auto=compress&fit=crop&h=400&w=1560`;
    [photo.src.landscapeBlur, photo.src.panoramaBlur] = await Promise.all([
      getBlurredPhoto(photo.src.landscape),
      getBlurredPhoto(photo.src.panorama),
    ]);

    const room = await Room.create({ ...data, banner: photo });
    return NextResponse.json({ photo }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error || "Something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}
