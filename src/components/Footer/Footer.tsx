"use client";
// React
import { useState } from "react";
// MUI Imports
import Card from "@mui/material/Card";
// Phosphor
import { SongBox } from "./components/SongBox";
import { SongInputs } from "@/components/Footer/components/SongInputs";
import { SongVolume } from "./components/SongVolume";

// ? Add props to Song Name and Song Artist of the SongBox component

export function Footer() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#000",
        borderRadius: ".5rem",
        border: "1px solid red",
        px: "1rem",
        py: ".5rem",
      }}
    >
      <SongBox />
      <SongInputs />
      <SongVolume />
    </Card>
  );
}
