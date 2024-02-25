"use client";
// React
import { useState } from "react";
// MUI Imports
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
// Icons

import { List } from "@phosphor-icons/react/dist/ssr";
// Components
import { LogInLibrary } from "@/components/LogIn-Library/LogInLibrary";
import { MainView } from "@/components/MainView/MainView";
import { Footer } from "@/components/Footer/Footer";
import { MenuDrawer } from "@/components/MenuDrawer/MenuDrawer";

// ? Change the Scrollbar of the entire project
// ! Drawer has a white border

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
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
        {isMobile ? (
          <Box sx={{ display: "flex", p: ".5rem", position: "absolute" }}>
            <IconButton color="secondary" onClick={handleDrawerOpen}>
              <List color="#fff" size={32} />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <MenuDrawer onClose={handleDrawerClose} />
            </Drawer>
          </Box>
        ) : (
          <LogInLibrary />
        )}
        <MainView />
      </Box>
      <Footer />
    </Box>
  );
}
