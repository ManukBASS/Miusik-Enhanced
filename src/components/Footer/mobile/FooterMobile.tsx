"use client";
// React
import { useEffect, useRef, useState } from "react";
// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
// Phosphor
import {
  Heart,
  PauseCircle,
  PlayCircle,
  Playlist,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  SpeakerLow,
  SpeakerX,
} from "@phosphor-icons/react/dist/ssr";
import { Tooltip } from "@mui/material";
import { SongData } from "../Footer";
// ? Song data is working as intended, music player logic needs some work
// ? Maybe try using previous Miusik code for songs
// ! Responsive design

export function FooterMobile({ songData }: { songData: SongData }) {
  const [pauseSong, setPauseSong] = useState(false);
  const [muteSong, setMuteSong] = useState(false);
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(50);
  const [heartIconState, setHeartIconState] = useState<{
    weight: "regular" | "fill";
    color: string;
  }>({
    weight: "regular",
    color: "#B3B3B3",
  });

  const audioRef = useRef(new Audio(songData?.mp3_file || ""));

  const handleMute = () => {
    if (muteSong) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
    setMuteSong(!muteSong);
  };

  const handleVolumeChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;

    setVolume(newVolume);
    setMuteSong(newVolume === 0);
  };

  const handleHeartIconClick = () => {
    setHeartIconState((prevState) => ({
      weight: prevState.weight === "regular" ? "fill" : "regular",
      color: prevState.weight === "regular" ? "#9C27B0" : "#B3B3B3",
    }));
  };

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
        width: "100%",
        backgroundColor: "#000",
        height: "28vh",
        borderRadius: ".5rem",
        px: ".5rem",
        py: ".5rem",
      }}
    >
      {/* NAME AND FAVORITE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle2" color="#B3B3B3" fontWeight={600}>
            {songData?.name || "Te Voy A Atornillar"}
          </Typography>
          <Typography variant="caption" color="#B3B3B3">
            {songData?.artists.artist_name ||
              "Patricio Rey y sus Redonditos de Ricota"}
          </Typography>
        </Box>
        <IconButton color="secondary" onClick={handleHeartIconClick}>
          <Heart
            size={22}
            color={heartIconState.color}
            weight={heartIconState.weight}
          />
        </IconButton>
      </Box>
      {/* SLIDER AND INPUTS */}
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {/* SLIDER */}
        <Box
          sx={{
            width: "100%",
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
        {/* INPUTS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* PLAYLIST */}
          <IconButton color="secondary">
            <Playlist size={25} color="#B3B3B3" />
          </IconButton>
          {/* PLAY/PAUSE/SKIP */}
          <Box>
            <IconButton color="secondary">
              <SkipBack weight="fill" size={25} color={"#B3B3B3"} />
            </IconButton>
            <IconButton color="secondary" onClick={handlePausePlay}>
              {pauseSong ? (
                <PauseCircle weight="fill" size={40} color={"#B3B3B3"} />
              ) : (
                <PlayCircle weight="fill" size={40} color={"#B3B3B3"} />
              )}
            </IconButton>
            <IconButton color="secondary">
              <SkipForward weight="fill" size={25} color={"#B3B3B3"} />
            </IconButton>
          </Box>
          {/* VOLUME */}
          <Tooltip
            title={
              <Slider
                size="small"
                orientation="vertical"
                color="secondary"
                aria-labelledby="volume-slider"
                value={volume}
                onChange={handleVolumeChange}
                sx={{ height: "10rem", backgroundColor: "#212121" }}
              />
            }
            placement="top"
            PopperProps={{
              sx: {
                "& .MuiTooltip-tooltip": {
                  backgroundColor: "#212121",
                },
                "& .MuiTooltip-arrow": {
                  color: "#212121",
                },
              },
            }}
            arrow
          >
            <Box>
              <IconButton color="secondary" onClick={handleMute}>
                {muteSong ? (
                  <SpeakerX size={25} color="#B3B3B3" />
                ) : volume <= 50 ? (
                  <SpeakerLow size={25} color="#B3B3B3" />
                ) : (
                  <SpeakerHigh size={25} color="#B3B3B3" />
                )}
              </IconButton>
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
