"use client";
// React
import { useEffect, useRef, useState } from "react";
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
// ! Slider is breaking on mobile

export function SongInputs({ songData }) {
  const [pauseSong, setPauseSong] = useState(false);
  const audioRef = useRef(new Audio(songData?.mp3_file || ""));

  const handlePausePlay = () => {
    const audio = audioRef.current;

    if (pauseSong) {
      audio.pause();
    } else {
      audio.play();
    }

    setPauseSong(!pauseSong);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleCanPlayThrough = () => {
      if (!pauseSong) {
        audio.play();
      }
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, [pauseSong, songData]);

  useEffect(() => {
    audioRef.current.src = songData?.mp3_file || "";
  }, [songData]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton sx={{ color: "#B3B3B3" }}>
          <SkipBack size={20} />
        </IconButton>
        <IconButton sx={{ color: "#B3B3B3" }} onClick={handlePausePlay}>
          {pauseSong ? <PauseCircle size={25} /> : <PlayCircle size={25} />}
        </IconButton>
        <IconButton sx={{ color: "#B3B3B3" }}>
          <SkipForward size={20} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: 450,
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
        }}
      >
        <Typography color="#B3B3B3" variant="subtitle2">
          0:00
        </Typography>
        <Slider size="small" color="secondary" />
        <Typography color="#B3B3B3" variant="subtitle2">
          {songData?.lenght}
        </Typography>
      </Box>
    </Box>
  );
}
