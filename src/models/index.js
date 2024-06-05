import dbConnect from "@/lib/db";
import mongoose, { Schema, model } from "mongoose";

await dbConnect();

const roomSchema = new Schema({
  name: String,
  messages: [],
  description: String,
});

export const Room = mongoose.models.rooms || model("rooms", roomSchema);
