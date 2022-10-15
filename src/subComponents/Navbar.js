import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >// home</motion.h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/About">
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >// about me</motion.h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} target="_blank" to="/Work">
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >// work</motion.h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" to="/Projects">
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >// projects</motion.h4>
            </Link>

        </Pages>

    )
}

export default Navbar