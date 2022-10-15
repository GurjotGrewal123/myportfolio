import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Pages = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

position: fixed;
bottom: 0;
right: 0;
padding-right: 2rem;
padding-bottom: 3.8rem;
z-index: 3;

`


const Navbar = () => {
    return (
        <Pages>
            <NavLink style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/Intro">
                // home
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/About">
                // about me
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/Work">
                // work
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" to="/Projects">
                // projects
            </NavLink>

        </Pages>
    )
}

export default Navbar