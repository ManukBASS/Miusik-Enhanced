// React
import React, { ChangeEvent, useState } from "react";
// MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider, { SliderTypeMap } from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery } from "@mui/material";
// Phosphor
import {
  SpeakerLow,
  SpeakerHigh,
  SpeakerX,
  ArrowsOutSimple,
  Playlist,
} from "@phosphor-icons/react/dist/ssr";

export function SongVolume() {
  const [muteSong, setMuteSong] = useState(false);
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(50);

  const isMobile = useMediaQuery("(max-width:975px)");

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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? null : "15rem",
      }}
    >
      <Tooltip
        title={
          <Slider
            size="small"
            orientation="vertical"
            color="secondary"
            aria-labelledby="volume-slider"
            value={volume}
            onChange={handleVolumeChange as SliderTypeMap["props"]["onChange"]}
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
      <IconButton color="secondary">
        <Playlist size={25} color="#B3B3B3" />
      </IconButton>
      <IconButton color="secondary">
        <ArrowsOutSimple size={25} color="#B3B3B3" />
      </IconButton>
    </Box>
  );
}
