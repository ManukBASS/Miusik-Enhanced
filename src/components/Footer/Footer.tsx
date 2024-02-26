"use client";
// React
import { useEffect, useState } from "react";
// MUI Imports
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
// Components
import { SongBox } from "./components/SongBox";
import { SongInputs } from "@/components/Footer/components/SongInputs";
import { SongVolume } from "./components/SongVolume";
// Supabase
import supabase from "../../../supabase/supabaseClient";
import { FooterMobile } from "./mobile/FooterMobile";

// ? Song data is working as intended, music player logic needs some work
// ? Maybe try using previous Miusik code for songs
// ! Responsive design: FooterMobile re-plays the songs.

export type SongData = {
  id: number;
  artist_id: number;
  album_id: number;
  name: string;
  lenght: string;
  mp3_file: string;
  artists: { artist_name: string };
  album: { cover_image: string };
};

export function Footer() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [songs, setSongs] = useState<SongData[]>([]);

  const isMobile = useMediaQuery("(max-width:575px)");

  useEffect(() => {
    const fetchSongs = async () => {
      const { data, error } = await supabase.from("songs").select(`
      *,
      artists: artist_id(*),
      album: album_id(*)
    `);

      if (error) {
        setFetchError("Could not fetch songs");
        setSongs([]);
      }
      if (data) {
        setSongs(data);
        setFetchError(null);
      }
    };

    fetchSongs();
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: ".5rem",
        px: "1rem",
        py: ".5rem",
      }}
    >
      {isMobile ? (
        <FooterMobile songData={songs[7]} />
      ) : (
        <>
          <SongBox songData={songs[7]} />
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <SongInputs songData={songs[7]} />
          </Box>
          <SongVolume />
        </>
      )}
    </Card>
  );
}
