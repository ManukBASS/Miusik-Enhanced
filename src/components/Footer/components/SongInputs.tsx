"use client";
// React
import { useEffect, useRef, useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import { useMediaQuery } from "@mui/material";
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

  const isMobile = useMediaQuery("(max-width:975px)");

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
      }}
    >
      {isMobile ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="secondary">
              <SkipBack weight="fill" size={20} color={"#B3B3B3"} />
            </IconButton>
            <IconButton color="secondary" onClick={handlePausePlay}>
              {pauseSong ? (
                <PauseCircle weight="fill" size={25} color={"#B3B3B3"} />
              ) : (
                <PlayCircle weight="fill" size={25} color={"#B3B3B3"} />
              )}
            </IconButton>
            <IconButton color="secondary">
              <SkipForward weight="fill" size={20} color={"#B3B3B3"} />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: 300,
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
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="secondary">
              <SkipBack weight="fill" size={20} color={"#B3B3B3"} />
            </IconButton>
            <IconButton color="secondary" onClick={handlePausePlay}>
              {pauseSong ? (
                <PauseCircle weight="fill" size={25} color={"#B3B3B3"} />
              ) : (
                <PlayCircle weight="fill" size={25} color={"#B3B3B3"} />
              )}
            </IconButton>
            <IconButton color="secondary">
              <SkipForward weight="fill" size={20} color={"#B3B3B3"} />
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
        </>
      )}
    </Box>
  );
}
