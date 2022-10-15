import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle"

const ProjectContainer = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Projects = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ProjectContainer id="projects">
                <Particle theme='dark' />
                Projects
            </ProjectContainer>
        </ThemeProvider>
    )
}

export default Projects; 