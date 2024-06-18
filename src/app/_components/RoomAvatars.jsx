import { Avatar, AvatarGroup } from "@mui/material";

import React from "react";

export default function RoomAvatars({ room }) {
  return (
    <AvatarGroup spacing={1} className="">
      {room.responses.slice(0, 3).map((response, index) => (
        <Avatar
          key={index}
          sx={{
            bgcolor: response.avatarColor,
            width: 20,
            height: 20,
            fontSize: "10px",
          }}
          style={{ border: "none" }}
        >
          A
        </Avatar>
      ))}
    </AvatarGroup>
  );
}
