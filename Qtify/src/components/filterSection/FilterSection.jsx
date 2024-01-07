import React from "react";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Cards/Card";
const FilterSection = ({ title, data, type }) => {
  return (
    <>
      <div className="headers">
        <h3>{title}</h3>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box> 
      ) : 
     ( <div>
        <Carousel
          data={data}
          component={(data) => {
            return <Card data={data} key={data.id} type={type}></Card>;
          }}
        ></Carousel>
      </div>)
      }
    </>
  );
};
export default FilterSection;
