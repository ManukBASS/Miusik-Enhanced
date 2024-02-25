"use client";
import React from "react";
// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// Phosphor
import { Books, House, X } from "@phosphor-icons/react/dist/ssr";
// Components
import { SignIn } from "@phosphor-icons/react/dist/ssr";
import { LibraryPlaylistCard } from "@/common/LibraryPlaylistCard/LibraryPlaylistCard";
import Link from "next/link";

type MenuDrawerProps = {
  onClose: () => void;
};

export function MenuDrawer({ onClose }: MenuDrawerProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#171717",
        height: "100vh",
        width: "20rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          top: -8,
          right: -8,
          px: "1rem",
          py: "1rem",
        }}
      >
        <IconButton color="secondary" onClick={onClose}>
          <X size={30} color="#B3B3B3" />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          width: "auto",
          height: "16vh",
          px: "1rem",
          py: "1rem",
          flexDirection: "column",
          borderRadius: ".5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            ":hover": { cursor: "pointer", bgcolor: "red" },
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
            ":hover": { cursor: "pointer", bgcolor: "red" },
          }}
        >
          <SignIn size={30} color="#B3B3B3" weight="regular" />
          <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
            Sign In
          </Typography>
        </Box>
      </Box>
      <Divider
        style={{ background: "#B3B3B3", marginTop: "1rem" }}
        variant="middle"
      />
      <Box
        sx={{
          display: "flex",
          width: "15rem",
          height: "66.6vh",
          flexDirection: "column",
          borderRadius: ".5rem",
          px: "1rem",
          py: "1rem",
          mt: ".5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            mb: "2rem",
          }}
        >
          <Books color="#B3B3B3" size={32} />
          <Typography variant="subtitle1" color="#B3B3B3" fontWeight="bold">
            Your library
          </Typography>
        </Box>
        <LibraryPlaylistCard />
      </Box>
      <Box sx={{ px: "1rem", py: "1rem" }}>
        <Link href={"https://github.com/ManukBASS"}>
          <Typography color="#B3B3B3">© ManukBASS</Typography>
        </Link>
      </Box>
    </Box>
  );
}
