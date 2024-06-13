import { Response } from "@/models";
import { NextResponse } from "next/server";

export async function PUT(req, { params: { id } }) {
  try {
    const eventOptions = ["like", "unlike"];
    const { event } = await req.json();

    if (!event || !eventOptions.includes(event))
      throw new Error("Event is not found or incorrect, Please try again");

    const response = await Response.findById(id);
    if (!response) throw new Error("ID is invalid, Please try again");

    const updatedResponse = await Response.findByIdAndUpdate(
      { _id: id },
      { $inc: { likes: event === "like" ? 1 : -1 } }
    );
    return NextResponse.json({ updatedResponse }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}
