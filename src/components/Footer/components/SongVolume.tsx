import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import {
  SpeakerLow,
  SpeakerHigh,
  SpeakerX,
  ArrowsOutSimple,
} from "@phosphor-icons/react/dist/ssr";

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
        alignItems: "center",
        justifyContent: "center",
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
          <IconButton sx={{ color: "#B3B3B3" }} onClick={handleMute}>
            {muteSong ? (
              <SpeakerX size={25} />
            ) : volume <= 50 ? (
              <SpeakerLow size={25} />
            ) : (
              <SpeakerHigh size={25} />
            )}
          </IconButton>
        </Box>
      </Tooltip>
      <IconButton sx={{ color: "#B3B3B3" }}>
        <ArrowsOutSimple size={25} />
      </IconButton>
    </Box>
  );
}
