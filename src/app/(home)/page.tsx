"use client";
// MUI Imports
import Box from "@mui/material/Box";

// Components
import { TopLeft } from "@/components/TopLeft/TopLeft";
import { Footer } from "@/components/Footer/Footer";
import supabase from "../../../supabase/supabaseClient";

export default function Home() {
  // console.log(supabase);
  return (
    <Box sx={{ p: ".5rem" }}>
      <Footer />
    </Box>
  );
}
