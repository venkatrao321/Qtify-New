import Card from "../Cards/Card";
import { Box, CircularProgress } from "@mui/material";
import "./section.css";
import React from "react";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
const Section = ({ title, data, type }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("change text");
  };
  return (
    <>
      <div className="headers">
        <h3>{title}</h3>
        <h4 className="toggletext" onClick={handleToggle}>
          {toggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box> 
      ) : 
        <div className="cards-wrapper">
          {toggle ? (
            <div className="wrapper"> 
              {data.map((item) => {
                return <Card data={item} key={item.id} type={type}></Card>;
              })}
            </div>
          ) : (
            <div>

              <Carousel
                data={data}
                component={(data) => {
                 return <Card data={data} key={data.id} type={type}></Card>;
               }}
              ></Carousel>
          
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Section;
