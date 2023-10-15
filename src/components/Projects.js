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

const ProjectTitle = styled.div`
position: absolute;
left: 10%;
top: 8%;
color: ${(props) => props.theme.text};
font-weight: 300;
font-size: 3rem;

.project-content{
    position: absolute;
    font-size: 1rem;
    padding-top: 2rem;
}
`

const Projects = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ProjectContainer id="projects">
            <Particle />
                <ProjectTitle>
                    / Projects
                    <p className='project-content'>a work in progress...</p>
                </ProjectTitle>
            </ProjectContainer>
        </ThemeProvider>
    )
}

export default Projects; 