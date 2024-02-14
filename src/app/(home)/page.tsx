"use client";
// MUI Imports
import Box from "@mui/material/Box";

// Components
import { LogInLibrary } from "@/components/LogIn-Library/LogInLibrary";
import { MainView } from "@/components/MainView/MainView";
import { Footer } from "@/components/Footer/Footer";

// ? Change the Scrollbar of the entire project

export default function Home() {
  return (
    <Box
      sx={{
        p: ".5rem",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", gap: ".5rem" }}>
        <LogInLibrary />
        <MainView />
      </Box>
      <Footer />
    </Box>
  );
}
