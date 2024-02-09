"use client";
// React
import { useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
// Phosphor
import {
  Heart,
  PauseCircle,
  PlayCircle,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "@phosphor-icons/react/dist/ssr";

// ! Add props to Song Duration, pause, prev and next functionality

export function SongInputs() {
  const [pauseSong, setPauseSong] = useState(false);

  const handlePause = () => {
    setPauseSong(!pauseSong);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton sx={{ color: "#B3B3B3" }}>
          <SkipBack size={25} />
        </IconButton>
        <IconButton sx={{ color: "#B3B3B3" }} onClick={handlePause}>
          {pauseSong ? <PauseCircle size={35} /> : <PlayCircle size={35} />}
        </IconButton>
        <IconButton sx={{ color: "#B3B3B3" }}>
          <SkipForward size={25} />
        </IconButton>
      </Box>
      <Box
        sx={{ width: 550, display: "flex", alignItems: "center", gap: ".8rem" }}
      >
        <Typography color="#B3B3B3" variant="subtitle2">
          0:00
        </Typography>
        <Slider size="small" color="secondary" />
        <Typography color="#B3B3B3" variant="subtitle2">
          0:00
        </Typography>
      </Box>
    </Box>
  );
}
