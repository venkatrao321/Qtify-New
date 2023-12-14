import React from "react";
import { useEffect, useState } from "react";
import { fetchTopAlbum,fetchNewAlbum } from "../../api/api.js";
import "./body.css";
import Hero from "../Hero-Section/Hero.jsx";
import Section from "../Section/section.jsx";
const Body = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData]=useState([]);
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
  useEffect(() => {
    genrateTopAlbumData();
    genrateNewAlbumData();
  }, []);

  return (
    <>
      <Hero></Hero>
      {/* {topAlbumData.map((item)=>{
     return  <Card data={item} type="album"></Card>

      })} */}
      <div className="section-wrapper">
    <Section data={topAlbumData}  type="album" title="Top Album"></Section>
    <Section data={newAlbumData}  type="album" title="New Album"></Section> 
      </div>
    </>
  );
};
export default Body;
