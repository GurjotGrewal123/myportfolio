import React from 'react'
import styled from 'styled-components'
import StarfieldAnimation from "react-starfield-animation";


const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleComponent = (props) => {

    return (
        <Box>
              <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
      numParticles={500}
      particleSpeed={1}
      dx={0.000000001} 
      dy={0.000000001}
    />
        </Box>
        )
}

export default ParticleComponent