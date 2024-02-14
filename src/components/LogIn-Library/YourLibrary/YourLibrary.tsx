"use client";
// MUI
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// Phosphor
import { Books } from "@phosphor-icons/react/dist/ssr";
import { LibraryPlaylistCard } from "@/common/LibraryPlaylistCard/LibraryPlaylistCard";

export function YourLibrary() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "20rem",
        // height: "85vh",
        flexDirection: "column",
        backgroundColor: "#171717",
        borderRadius: ".5rem",
        px: "1rem",
        py: "1rem",
        mt: ".5rem",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "1rem", mb: "2rem" }}
      >
        <Books color="#B3B3B3" size={32} />
        <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
          Your library
        </Typography>
      </Box>
      <LibraryPlaylistCard />
    </Card>
  );
}
