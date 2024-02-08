"use client";
// React
import { useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
// Phosphor
import { SongBox } from "./components/SongBox";

// ? Add props to Song Name and Song Artist of the SongBox component

export function Footer() {
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
      color: prevState.weight === "regular" ? "#800080" : "#B3B3B3",
    }));
  };

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#000",
        borderRadius: ".5rem",
        border: "1px solid red",
        px: "1rem",
        py: "1.8rem",
      }}
    >
      <SongBox />
    </Card>
  );
}
