import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github, LinkedIn, Email } from "../components/AllSvgs"

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
background-color: ${props => props.theme.text};

`

const Socials = () => {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/GurjotGrewal123" }}>
                    <Github width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.linkedin.com/in/gurjotgrewal24/" }}>
                    <LinkedIn width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "mailto:gurjot_grewal@outlook.com" }}>
                    <Email width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>

            <Line></Line>

        </Icons>
    )
}

export default Socials