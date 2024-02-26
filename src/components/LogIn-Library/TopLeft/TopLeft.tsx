"use client";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// Phosphor
import { House } from "@phosphor-icons/react/dist/ssr";
import { SignIn } from "@phosphor-icons/react/dist/ssr";

// ? Add onClick functions for navigation to Home and LogIn pages.

export function TopLeft() {
  return (
    <Card
      sx={{
        display: "flex",
        gap: "1rem",
        width: "auto",
        height: "16vh",
        flexDirection: "column",
        backgroundColor: "#171717",
        borderRadius: ".5rem",
        px: "1rem",
        py: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          transition: ".2s ease",
          borderRadius: ".5rem",
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#212121",
            transition: ".2s ease",
          },
        }}
      >
        <House size={30} color="#B3B3B3" weight="regular" />
        <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
          Home
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          transition: ".2s ease",
          borderRadius: ".5rem",
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#212121",
            transition: ".2s ease",
          },
        }}
      >
        <SignIn size={30} color="#B3B3B3" weight="regular" />
        <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
          Sign In
        </Typography>
      </Box>
    </Card>
  );
}
