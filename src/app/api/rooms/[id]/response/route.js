import dbConnect from "@/lib/db";
import getMuiColor from "@/lib/getMuiColor";
import { Response, Room } from "@/models";
import { NextResponse } from "next/server";

export async function POST(req, { params: { id } }) {
  try {
    await dbConnect();
    const { message } = await req.json();
    if (!id || !message) throw new Error("Invalid fields, Please try again");
    const room = await Room.findById(id);
    if (room) {
      const createdResponse = await Response.create({
        avatarColor: getMuiColor(),
        room: room._id,
        message: message,
        likes: 0,
        comments: [],
      });
      room.responses.unshift(createdResponse._id);
      let updatedRoom = room.save();
      return NextResponse.json(
        { updatedRoom, createdResponse },
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
      { message: error.message || "Something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}
