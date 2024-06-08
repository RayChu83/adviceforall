import dbConnect from "@/lib/db";
import getMuiColor from "@/lib/getMuiColor";
import { Comment, Response } from "@/models";
import { NextResponse } from "next/server";

export async function POST(req, { params: { id } }) {
  try {
    await dbConnect();
    const { comment } = await req.json();
    if (!comment) throw new Error("Invalid fields, Please try again");
    const response = await Response.findById(id);
    if (response) {
      const createdComment = await Comment.create({
        response: response._id,
        avatarColor: getMuiColor(),
        message: comment,
        likes: 0,
      });
      const updatedResponse = await Response.updateOne(
        { _id: response._id },
        { $push: { comments: createdComment._id } }
      );
      return NextResponse.json(
        { updatedResponse, createdComment },
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
