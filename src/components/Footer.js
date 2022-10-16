import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import Particle from "../subComponents/Particle";

const FooterContainer = styled.div`
background-color: ${props => props.theme.body};
display: flex;
height: 8vh;
justify-content: center;
align-items: center;
flex-direction: column;

.footer-content{
    -webkit-text-fill-color: white;
    font-weight: 300;
}
`
const Footer = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <FooterContainer>
                <Particle />
                <div className="footer-content">Built and designed by Gurjot Grewal.</div>
                <div className="footer-content">All rights reserved. ©</div>
            </FooterContainer>
        </ThemeProvider>
    );
}

export default Footer;