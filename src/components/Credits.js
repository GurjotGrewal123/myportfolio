import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle";

const CreditContainer = styled.div`
background-color: ${props => props.theme.body};
display: flex;
width: 100vw;
height: 8vh;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;

.footer-content{
    -webkit-text-fill-color: white;
    font-weight: 300;
}
`
const Credits = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CreditContainer>
                <div className="footer-content">Built and designed by Gurjot Grewal.</div>
                <div className="footer-content">All rights reserved. ©</div>
            </CreditContainer>
        </ThemeProvider>
    );
}

export default Credits;