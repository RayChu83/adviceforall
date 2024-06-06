import dbConnect from "@/lib/db";
import { Message, Room } from "@/models";
import { NextResponse } from "next/server";

export async function POST(req, { params: { id } }) {
  try {
    await dbConnect();
    const data = await req.json();
    if (!id || !data.message)
      throw new Error("Invalid fields, Please try again");
    const room = await Room.findById(id);
    if (room) {
      const createdMessage = await Message.create({
        room: room._id,
        message: data.message,
        likes: 0,
        comments: [],
      });
      const createdRoom = await Room.updateOne(
        { _id: room._id },
        { $push: { messages: createdMessage._id } }
      );
      return NextResponse.json(
        { createdRoom, createdMessage },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "ID is invalid, Please try again" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
