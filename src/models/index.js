import dbConnect from "@/lib/db";
import mongoose, { Schema, model } from "mongoose";

await dbConnect();

const roomSchema = new Schema({
  name: String,
  messages: [],
  description: String,
  banner: [
    {
      id: Number,
      width: Number,
      height: Number,
      url: String,
      photographer: String,
      photographer_url: String,
      photographer_id: Number,
      avg_color: String,
      src: {
        original: String,
        large2x: String,
        large: String,
        medium: String,
        small: String,
        portrait: String,
        landscape: String,
        tiny: String,
      },
      liked: Boolean,
      alt: String,
    },
  ],
});

export const Room = mongoose.models.rooms || model("rooms", roomSchema);
