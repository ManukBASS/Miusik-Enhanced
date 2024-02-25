"use client";
import React, { useEffect, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Components
import { BandCard } from "@/common/BandCard/BandCard";
// Supabase
import supabase from "../../../supabase/supabaseClient";
import { Skeleton } from "@mui/material";

type AlbumData = {
  id: number;
  name: string;
  cover_image: string;
  artist_id: number;
  artists: {
    artist_name: string;
  };
};

export function MainView() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const { data, error } = await supabase.from("album").select(`
       *,
       artists: artist_id(*)
     `);

      if (error) {
        setFetchError("Could not fetch songs");
        setAlbums([]);
      }
      if (data) {
        setAlbums(data);
        setFetchError(null);
      }
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  console.log(albums);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: ".5rem",
        height: "84vh",
        overflowY: "auto",
        px: "1rem",
        py: "1rem",
        background:
          "linear-gradient(180deg, rgba(156,39,176,1) 0%, rgba(110,33,123,1) 0%, rgba(89,30,99,1) 2%, rgba(81,29,90,1) 4%, rgba(62,27,68,1) 15%, rgba(43,25,46,1) 43%, rgba(23,23,23,1) 72%)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          fontSize="1.8rem"
          mb={"1rem"}
        >
          Welcome !
        </Typography>
      </Box>
      {loading ? (
        <Grid container spacing={2}>
          {[...Array(8)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
              <Skeleton
                sx={{
                  width: "11.5rem",
                  borderRadius: ".5rem",
                  px: "1rem",
                  py: "1rem",
                }}
                variant="rectangular"
                animation="wave"
                height={270}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={3} lg={3} xl={3}>
              <BandCard
                albumCover={album.cover_image}
                albumName={album.name}
                albumArtist={album.artists.artist_name}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
