import React from "react";
import { useEffect, useState } from "react";
import { fetchTopAlbum,fetchNewAlbum,fetchSong,fetchGenres } from "../../api/api.js";
import "./body.css";
import Hero from "../Hero-Section/Hero.jsx";
import Section from "../Section/section.jsx";
import FilterSection from "../filterSection/FilterSection.jsx";
const Body = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData]=useState([]);
  const [allSongs,setAllSongs]=useState([]);
  const [AllGenres,setAllGenres]=useState([]);
  const genrateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbum();
      console.log(data)
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const genrateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbum();
      console.log(data)
      setNewAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllSongs=async()=>{
    try {
      const data= await fetchSong();
      console.log(data);
      setAllSongs(data);
    } catch (error) {
      
    }
  }
  const fetchAllGenres=async()=>{
    try {
      const data= await fetchGenres();
      console.log(data);
      setAllGenres([{"key":"all","label":"All"},...data.data]);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    genrateTopAlbumData();
    genrateNewAlbumData();
    fetchAllSongs();
    fetchAllGenres();
  }, []);

  return (
    <>
      <Hero></Hero>
      <div className="section-wrapper">
        <Section data={topAlbumData} type="album" title="Top Album"></Section>
        <Section data={newAlbumData} type="album" title="New Album"></Section>
        <FilterSection data={allSongs} genres={AllGenres} gentype="filterAlbum" title="Songs"></FilterSection>
      </div>
    </>
  );
};
export default Body;
