"use client";
import React from "react";
// MUI
import { Box } from "@mui/material";
// Components
import { TopLeft } from "./TopLeft/TopLeft";
import { YourLibrary } from "./YourLibrary/YourLibrary";

export function LogInLibrary() {
  return (
    <Box>
      <TopLeft />
      <YourLibrary />
    </Box>
  );
}
