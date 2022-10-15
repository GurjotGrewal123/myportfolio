import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle"

const AboutContainer = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`



const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AboutContainer id="about">
                <Particle theme='dark' />
                About Me
            </AboutContainer>
        </ThemeProvider>
    )
}

export default About; 