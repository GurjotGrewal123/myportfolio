import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle"

const WorkContainer = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Work = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <WorkContainer id="work">
                <Particle />
                Work Exp.
            </WorkContainer>
        </ThemeProvider>
    )
}

export default Work; 