import React from "react";
import { useEffect, useState } from "react";
import { fetchTopAlbum,fetchNewAlbum,fetchSong } from "../../api/api.js";
import "./body.css";
import Hero from "../Hero-Section/Hero.jsx";
import Section from "../Section/section.jsx";
import FilterSection from "../filterSection/FilterSection.jsx";
const Body = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData]=useState([]);
  const [allSongs,setAllSongs]=useState([]);
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
  useEffect(() => {
    genrateTopAlbumData();
    genrateNewAlbumData();
    fetchAllSongs();
  }, []);

  return (
    <>
      <Hero></Hero>
      <div className="section-wrapper">
        <Section data={topAlbumData} type="album" title="Top Album"></Section>
        <Section data={newAlbumData} type="album" title="New Album"></Section>
        <FilterSection data={allSongs} type="filterAlbum" title="Songs"></FilterSection>
      </div>
    </>
  );
};
export default Body;
