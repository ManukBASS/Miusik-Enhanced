"use client";
// React
import { useEffect, useState } from "react";
// MUI Imports
import Card from "@mui/material/Card";
// Components
import { SongBox } from "./components/SongBox";
import { SongInputs } from "@/components/Footer/components/SongInputs";
import { SongVolume } from "./components/SongVolume";
// Supabase
import supabase from "../../../supabase/supabaseClient";

// ? Song data is working as intended, music player logic needs some work
// ? Maybe try using previous Miusik code for songs
// ! Responsive design

type SongData = {
  id: number;
  artist_id: number;
  album_id: number;
  name: string;
  lenght: string;
  mp3_file: string;
};

export function Footer() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [songs, setSongs] = useState<SongData[]>([]);

  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     const { data, error } = await supabase.from("songs").select(`
  //     *,
  //     artists: artist_id(*),
  //     album: album_id(*)
  //   `);

  //     if (error) {
  //       setFetchError("Could not fetch songs");
  //       setSongs([]);
  //     }
  //     if (data) {
  //       setSongs(data);
  //       setFetchError(null);
  //     }
  //   };

  //   fetchSongs();
  // }, []);

  // console.log(songs);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#000",
        borderRadius: ".5rem",
        border: "1px solid red",
        px: "1rem",
        py: ".5rem",
      }}
    >
      <SongBox songData={songs[8]} />
      <SongInputs songData={songs[8]} />
      <SongVolume />
    </Card>
  );
}
