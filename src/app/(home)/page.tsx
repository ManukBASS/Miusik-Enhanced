"use client";
// MUI Imports
import Box from "@mui/material/Box";

// Components
import { LogInLibrary } from "@/components/LogIn-Library/LogInLibrary";
import { TopLeft } from "@/components/LogIn-Library/TopLeft/TopLeft";
import { Footer } from "@/components/Footer/Footer";
import { YourLibrary } from "@/components/LogIn-Library/YourLibrary/YourLibrary";

export default function Home() {
  return (
    <Box sx={{ p: ".5rem" }}>
      <LogInLibrary />
    </Box>
  );
}
