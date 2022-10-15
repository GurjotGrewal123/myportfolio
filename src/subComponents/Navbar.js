import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <Link style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/">
                // home
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/About">
                // about me
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/Work">
                // work
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" to="/Projects">
                // projects
            </Link>

        </Pages>

    )
}

export default Navbar