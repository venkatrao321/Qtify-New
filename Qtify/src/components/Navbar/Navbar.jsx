import React from "react";
import "./navbar.css"
import Button from "../Button/Button.jsx";
import Logo from "../Logo/Logo.jsx";
import Search from "../SearchBar/Searchbar.jsx";
const Navbar=()=>{
    return <nav className="navbar">
    <Logo></Logo>
    <Search></Search>
    <Button text="Give Feedback"></Button>
    </nav>
}
export default Navbar;