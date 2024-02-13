"use client";
// React
import { useState } from "react";
// MUI Imports
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
// Phosphor
import {
  SpeakerLow,
  SpeakerHigh,
  SpeakerX,
  ArrowsOutSimple,
} from "@phosphor-icons/react/dist/ssr";

// ! Add volume Up and Down funcionality

export function SongVolume() {
  const [muteSong, setMuteSong] = useState(false);
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(50);

  const handleMute = () => {
    if (muteSong) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
    setMuteSong(!muteSong);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    setMuteSong(newValue === 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ width: 220, display: "flex", alignItems: "center", gap: ".5rem" }}
      >
        <IconButton sx={{ color: "#B3B3B3" }} onClick={handleMute}>
          {muteSong ? (
            <SpeakerX size={25} />
          ) : volume <= 50 ? (
            <SpeakerLow size={25} />
          ) : (
            <SpeakerHigh size={25} />
          )}
        </IconButton>
        <Slider
          size="small"
          color="secondary"
          aria-label="Volume"
          value={volume}
          onChange={handleVolumeChange}
        />
        <IconButton sx={{ color: "#B3B3B3" }}>
          <ArrowsOutSimple size={25} />
        </IconButton>
      </Box>
    </Box>
  );
}
