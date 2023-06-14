import React from "react";
import styled from "styled-components";
import { useEffect, useState } from 'react';
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

.navbar-white {
    -webkit-text-fill-color: ${props => props.theme.body};
}

`


const Navbar = () => {

    const [color1, setColor1] = useState(false);
    const [color2, setColor2] = useState(false);
    const [color3, setColor3] = useState(false);
    const [color4, setColor4] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

    const changeColor = () => {
        if (window.scrollY >= "155") {
            setColor1(true);
        }
        else {
            setColor1(false);
        }
        if (window.scrollY >= "125") {
            setColor2(true);
        }
        else {
            setColor2(false);
        }
        if (window.scrollY >= "95") {
            setColor3(true);
        }
        else {
            setColor3(false);
        }
        if (window.scrollY >= "65") {
            setColor4(true);
        }
        else {
            setColor4(false);
        }
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth < 420);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", changeColor);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Pages>
            <a href="#home" className={color1 ? "navbar-white" : "navbar-black"} style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }}>
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                > {isMobile ? "// 🏠" : "// home"}</motion.h4>
            </a>
            <a href="#about" className={color2 ? "navbar-white" : "navbar-black"} style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} >
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                > {isMobile ? "// 👨🏽" : "// about me"}</motion.h4>
            </a>
            <a href="#work" className={color3 ? "navbar-white" : "navbar-black"} style={{ textDecoration: 'none', color: 'inherit', marginBottom: "0.8rem" }} >
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                > {isMobile ? "// 💼" : "// work"}</motion.h4>
            </a>
            <a href="#projects" className={color4 ? "navbar-white" : "navbar-black"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                > {isMobile ? "// 👨🏽‍💻" : "// projects"}</motion.h4>
            </a>

        </Pages>

    )
}

export default Navbar