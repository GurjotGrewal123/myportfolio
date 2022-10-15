import React from 'react';
import { useState } from 'react';
import styled, { keyframes } from "styled-components"
import Socials from "../subComponents/Socials"
import Navbar from "../subComponents/Navbar"
import IntroContent from "./IntroContent"
import { Basketball } from './AllSvgs';
import { animate } from 'framer-motion';
const DROP_HEIGHT = "150px";
const DURATION = "0.7s";

//passes theme
const IntroContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw; 
height: 100vh;
overflow: hidden;

position: relative;
 
h2,h3.h4.h5.h6{
    font-family: 'Karla', sans-serif;
    font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const upAndDown = keyframes`

from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(${DROP_HEIGHT}) scale(1, 0.9);
  }
}

`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position:absolute;
transform: translate(-50%,-50%);
top: ${props => props.click ? '35%' : '40%'};
left: ${props => props.click ? '45%' : '50%'};
scale: ${props => props.click ? '40%' : '100%'};
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation-name: ${upAndDown};
    animation-duration: ${DURATION};
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    animation-iteration-count: infinite;
 }

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 10rem;
}

`

const DarkDiv = styled.div`
position: absolute;
background-color: #000;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Intro = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <IntroContainer>
            <DarkDiv click={click} />
            <Container>
                <Socials theme={click ? 'dark' : 'light'} />
                <Navbar />
                <Center click={click} onClick={() => handleClick()}>
                    <Basketball width={120} height={120} fill='currentColor' />
                    <span>click me</span>
                </Center>
            </Container>
            {click ? <IntroContent click={click} /> : null}
        </IntroContainer>
    )
}

export default Intro; 