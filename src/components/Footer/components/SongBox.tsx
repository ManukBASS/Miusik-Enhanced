"use client";
// React
import { useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
// Phosphor
import { Heart } from "@phosphor-icons/react/dist/ssr";

// ! Add props to Album Cover, Song Name and Song Artist

export function SongBox({ songData }) {
  const [heartIconState, setHeartIconState] = useState<{
    weight: "regular" | "fill";
    color: string;
  }>({
    weight: "regular",
    color: "#B3B3B3",
  });

  const handleHeartIconClick = () => {
    setHeartIconState((prevState) => ({
      weight: prevState.weight === "regular" ? "fill" : "regular",
      color: prevState.weight === "regular" ? "#9C27B0" : "#B3B3B3",
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Avatar
        src={songData?.album.cover_image}
        variant="rounded"
        sx={{ width: 60, height: 60 }}
      ></Avatar>
      <Box>
        <Typography variant="subtitle2" color="#B3B3B3">
          {songData?.name}
        </Typography>
        <Typography variant="caption" color="#B3B3B3">
          {songData?.artists.artist_name}
        </Typography>
      </Box>
      <IconButton color="secondary" onClick={handleHeartIconClick}>
        <Heart
          size={22}
          color={heartIconState.color}
          weight={heartIconState.weight}
        />
      </IconButton>
    </Box>
  );
}
