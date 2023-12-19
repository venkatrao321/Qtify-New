import "./searchbar.css"
import searchIcon from "../../assets/Search-Icon.svg"
import React from "react"
const Search=()=>{
    return <form action="" className="head-search">
        <input type="search" className="search-bar" placeholder="Search an album of your choice"></input>
        <button className="search-button"> <img src={searchIcon} alt="SearchIcon" /></button>
    </form>
}

export default Search;
