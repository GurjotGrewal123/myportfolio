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

const Computer = styled.div`
position: absolute;
right: 10%;
top: 35%;
scale: 1.5;
`

const AboutContent = styled.div`
color: ${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-weight: 300;
backdrop-filter: blur(4px);
overflow: scroll;

position: absolute;
left: 10%;
top: 10rem;
font-family: "NTR", sans-serif;

.technologies{
    transform: translate(50px, 10px);
}

#about-links{
    text-decoration: none;
    color: #7FFFD4;
    font-weight: 600;
}


`

const AboutTitle = styled.div`
position: absolute;
left: 10%;
top: 8%;
color: ${(props) => props.theme.text};
font-weight: 300;
font-size: 3rem;
`

const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AboutContainer id="about">
                <Particle theme='dark' />

                <AboutTitle>
                    / About Me
                </AboutTitle>

                <Computer>
                    <iframe title="computerImg" src="https://giphy.com/embed/gH85KtY9fX2yd9eG4F" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </Computer>

                <AboutContent>
                    <div >
                        I am currently a second year Software Engineering major at the <a id="about-links" href="https://www2.uottawa.ca/en">University of Ottawa</a>.
                        I have currently completed one of my five co-op terms.
                        I love learning new technologies and am always trying to grow my skillset.
                        I have been interested in designing programs since high-school; hence, my pursuit in this field.

                        <br></br>
                        <br></br>
                        Here are some technologies I have been working with:
                        <div className="technologies">
                            <ul>
                                <li>Javascript ES6+</li>
                                <li>Java</li>
                                <li>React.js</li>
                                <li>Python</li>
                                <li>HTML & CSS</li>

                            </ul>
                        </div>
                        <br></br>
                        Other than software development, I love to play basketball, video games, and edit videos. You can hit me up to talk about any of these related topics!
                    </div>
                </AboutContent>

            </AboutContainer>
        </ThemeProvider>
    )
}

export default About; 
