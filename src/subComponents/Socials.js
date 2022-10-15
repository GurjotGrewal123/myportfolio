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
`
const Socials = () => {
    return (
        <Icons>
            <div>
                <NavLink to="/">
                    <Github width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <LinkedIn width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <Email width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>

        </Icons>
    )
}

export default Socials