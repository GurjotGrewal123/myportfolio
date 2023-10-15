import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle";
import WorkTabs from "./WorkTabs";


const WorkContainer = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`

const WorkTitle = styled.div`
position: absolute;
left: 10%;
top: 8%;
color: ${(props) => props.theme.text};
font-weight: 300;
font-size: 3rem;
`



const Work = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <WorkContainer id="work">
            <Particle />
                <WorkTitle>
                    / Work Experience
                </WorkTitle>

                <WorkTabs></WorkTabs>

            </WorkContainer>
        </ThemeProvider>
    )
}
export default Work; 