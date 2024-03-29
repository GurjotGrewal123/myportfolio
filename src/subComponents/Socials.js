import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github, LinkedIn, Email } from "../components/AllSvgs"
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
    margin: 0.3rem 0;
}

`



const Line = styled.div`

width: 2px;
height: 5rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

`

const Socials = (props) => {


    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/GurjotGrewal123" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.linkedin.com/in/gurjotgrewal24/" }}>
                    <LinkedIn width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink className="logo-white" style={{ color: 'inherit' }} target="_blank" to={{ pathname: "mailto:gurjot_grewal@outlook.com" }}>
                    <Email width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>

            <Line color={props.theme} />

        </Icons>
    )
}

export default Socials