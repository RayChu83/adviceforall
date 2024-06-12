import { Avatar, AvatarGroup } from "@mui/material";

import React from "react";

export default function RoomAvatars({ room }) {
  return (
    <AvatarGroup spacing={1} className="avatarGroup">
      {room.responses.map((response, index) => (
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
