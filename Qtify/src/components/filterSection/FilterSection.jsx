import React from "react";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Cards/Card";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from "react";

const FilterSection = ({ title, data,genres, type }) => {
  const [value, setValue] = useState('all');
  const [filteredSongs,setFilteredSongs]=useState(data);
  //console.log(genres)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{
   let filterdData=data?.filter((items)=>{
   if(items.genre.key===value){
   return items
   }
   if(value==="all"){
    return items
   }
   })
   //console.log(filterdData);
   setFilteredSongs(filterdData);
  },[value])
  return (
    <>
      <div className="headers">
        <h3>{title}</h3>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Songs tab"
            textColor="inherit"
          >
            {
              genres.map((data)=>{
                return <Tab key={data.key} value={data.key} label={data.label} />
              })
            } 
          </Tabs>
          <Carousel
            data={filteredSongs}
            component={(filteredSongs) => {
              return <Card data={filteredSongs} key={filteredSongs.id} type={type}></Card>;
            }}
          ></Carousel>
        </div>
      )}
    </>
  );
};
export default FilterSection;
