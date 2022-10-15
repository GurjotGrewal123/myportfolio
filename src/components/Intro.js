import React from 'react';
import styled from "styled-components"
import Socials from "../subComponents/Socials"
import Navbar from "../subComponents/Navbar"
import { Basketball } from './AllSvgs';

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

const Center = styled.div`
`


const Intro = () => {
    return (
        <IntroContainer>
            <Container>
                <Socials />
                <Navbar />
                <Center>
                    <Basketball width={120} height={120} fill='currentColor' />
                    <span>click me...</span>
                </Center>
            </Container>
        </IntroContainer>
    )
}

export default Intro; 