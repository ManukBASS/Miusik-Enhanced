"use client";
import React from "react";

import { useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
// Phosphor
import { Heart } from "@phosphor-icons/react/dist/ssr";

export function LibraryPlaylistCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "auto",
        borderRadius: ".5rem",
        gap: "1rem",
        backgroundColor: "#171717",
        transition: ".2s ease",
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#212121",
          transition: ".2s ease",
        },
      }}
    >
      <Avatar
        src="./broken-image.png"
        variant="rounded"
        sx={{
          width: 60,
          height: 60,

          background:
            "linear-gradient(128deg, rgba(156,39,176,1) 19%, rgba(165,58,183,1) 38%, rgba(187,106,200,1) 64%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Heart size={22} color="#FFFFFF" weight="fill" />
      </Avatar>
      <Box sx={{ ml: "1rem" }}>
        <Typography variant="body1" color="#B3B3B3">
          Favorites
        </Typography>
      </Box>
    </Box>
  );
}
