import dbConnect from "@/lib/db";
import mongoose, { Schema, SchemaTypes, model } from "mongoose";

await dbConnect();

const roomSchema = new Schema(
  {
    name: String,
    responses: [
      {
        type: SchemaTypes.ObjectId,
        ref: "responses",
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

const responseSchema = new Schema(
  {
    avatarColor: String,
    room: { type: SchemaTypes.ObjectId, ref: "rooms" },
    message: String,
    likes: Number,
    comments: [
      {
        type: SchemaTypes.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);

const commentSchema = new Schema(
  {
    response: { type: SchemaTypes.ObjectId, ref: "responses" },
    message: String,
    avatarColor: String,
    likes: Number,
  },
  { timestamps: true }
);

export const Room = mongoose.models.rooms || model("rooms", roomSchema);
export const Response =
  mongoose.models.responses || model("responses", responseSchema);
export const Comment =
  mongoose.models.comments || model("comments", commentSchema);
