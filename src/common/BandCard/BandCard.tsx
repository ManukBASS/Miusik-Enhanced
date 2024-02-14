"use-client";
import React, { useState } from "react";
// MUI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";

// Icons
import { Play } from "@phosphor-icons/react/dist/ssr";

export function BandCard({ albumCover, albumName, albumArtist }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#171717",
        width: "11.5rem",
        borderRadius: ".5rem",
        px: "1rem",
        py: "1rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: ".2s ease",
        ":hover": {
          backgroundColor: "#212121",
          transition: ".2s ease",
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {hovered && (
        <Zoom in={hovered} style={{ backgroundColor: "#9C27B0" }}>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              borderRadius: 100,
              position: "absolute",
              bottom: 118,
              right: 25,
              zIndex: 1,
              maxWidth: "3rem",
              maxHeight: "3rem",
              minWidth: "3rem",
              minHeight: "3rem",
            }}
          >
            <Play size={45} weight="fill" />
          </Button>
        </Zoom>
      )}
      <Avatar
        src={albumCover}
        variant="rounded"
        sx={{ width: 150, height: 150, borderRadius: ".5rem" }}
      />
      <Box sx={{ mt: "1rem", height: "5rem", textAlign: "left" }}>
        <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
          {albumName}
        </Typography>
        <Typography variant="caption" color="#B3B3B3">
          {albumArtist}
        </Typography>
      </Box>
    </Card>
  );
}
