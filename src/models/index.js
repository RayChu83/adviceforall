import dbConnect from "@/lib/db";
import mongoose, { Schema, SchemaTypes, model } from "mongoose";

await dbConnect();

const roomSchema = new Schema(
  {
    name: String,
    messages: [
      {
        type: SchemaTypes.ObjectId,
        ref: "messages",
      },
    ],
    description: String,
    banner: {
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
  },
  { timestamps: true }
);

const messageSchema = new Schema(
  {
    room: SchemaTypes.ObjectId,
    message: String,
    likes: Number,
    comments: [],
  },
  { timestamps: true }
);

export const Room = mongoose.models.rooms || model("rooms", roomSchema);
export const Message =
  mongoose.models.messages || model("messages", messageSchema);
