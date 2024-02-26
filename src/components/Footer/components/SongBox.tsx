"use client";
// React
import { useState } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/material";
// Phosphor
import { Heart } from "@phosphor-icons/react/dist/ssr";
import { SongData } from "../Footer";

// ! Add props to Album Cover, Song Name and Song Artist

export function SongBox({ songData }: { songData: SongData }) {
  const [heartIconState, setHeartIconState] = useState<{
    weight: "regular" | "fill";
    color: string;
  }>({
    weight: "regular",
    color: "#B3B3B3",
  });

  const isMobile = useMediaQuery("(max-width:975px)");

  const SongNameAndArtist = (
    <>
      <Typography variant="subtitle2" color="#B3B3B3">
        {songData?.name}
      </Typography>
      <Typography variant="caption" color="#B3B3B3">
        {songData?.artists.artist_name}
      </Typography>
    </>
  );

  const handleHeartIconClick = () => {
    setHeartIconState((prevState) => ({
      weight: prevState.weight === "regular" ? "fill" : "regular",
      color: prevState.weight === "regular" ? "#9C27B0" : "#B3B3B3",
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        gap: "1rem",
      }}
    >
      {isMobile ? (
        <>
          <Tooltip
            title={SongNameAndArtist}
            arrow
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
          >
            <Avatar
              src={songData?.album.cover_image}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
          </Tooltip>
          <IconButton color="secondary" onClick={handleHeartIconClick}>
            <Heart
              size={22}
              color={heartIconState.color}
              weight={heartIconState.weight}
            />
          </IconButton>
        </>
      ) : (
        <>
          <Avatar
            src={songData?.album.cover_image}
            variant="rounded"
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="subtitle2" color="#B3B3B3">
              {songData?.name}
            </Typography>
            <Typography variant="caption" color="#B3B3B3">
              {songData?.artists.artist_name}
            </Typography>
          </Box>
          <IconButton color="secondary" onClick={handleHeartIconClick}>
            <Heart
              size={22}
              color={heartIconState.color}
              weight={heartIconState.weight}
            />
          </IconButton>
        </>
      )}
    </Box>
  );
}
