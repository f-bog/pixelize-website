import React from "react"
import styled, { keyframes } from "styled-components"

const float1 = keyframes`
from {
    transform: translateY(2px)
  } to {
    transform: translateY(0px)
  }
`

const float2 = keyframes`
from {
    transform: translateX(2px)
  } to {
    transform: translateX(0px)
  }
`
const float3 = keyframes`
from {
    transform: translateX(0px)
  } to {
    transform: translateX(3px)
  }
`
const float4 = keyframes`
from {
    transform: translateY(0px)
  } to {
    transform: translateY(3px)
  }
`
const EmblemContainer = styled.div`
  width: 150px;
  margin: 0 auto;
  .orange {
    animation: ${float2} 1s ease-in-out infinite alternate;
  }
  .biggreen {
    animation: ${float1} 1s ease-in-out infinite alternate;
  }

  .bigblue {
    animation: ${float3} 1s ease-in-out infinite alternate;
  }

  .pink {
    animation: ${float4} 1s ease-in-out infinite alternate;
  }

  .purple {
    animation: ${float4} 1s ease-in-out infinite alternate;
  }
`

const FooterEmblem = () => (
  <EmblemContainer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.92 114.28">
      <g
        fillRule="evenodd"
        transform="rotate(90 1280.092 -864.634) scale(3.5295)"
      >
        <rect
          className="biggreen"
          width="3.529"
          height="9.71"
          x="622.53"
          y="86.686"
          fill="#0f0"
          ry="0"
        />
        <rect
          className="orange"
          width="3.529"
          height="3.529"
          x="629.33"
          y="106.23"
          fill="#ff8900"
          ry="0"
        />
        <rect
          className="bigblue"
          width="3.529"
          height="15.152"
          x="629.33"
          y="74.94"
          fill="#00b3ff"
          ry="0"
        />
        <g strokeWidth="0.01">
          <rect
            width="3.529"
            height="3.529"
            x="629.33"
            y="94.374"
            fill="#f07"
            ry="0"
          />
          <rect
            width="3.529"
            height="3.529"
            x="614.87"
            y="90.006"
            fill="#0ff"
            ry="0"
          />
          <rect
            width="3.529"
            height="3.529"
            x="622.53"
            y="100.4"
            fill="#ff0"
            ry="0"
          />
        </g>
        <rect
          className="purple"
          width="3.529"
          height="15.923"
          x="622.1"
          y="63.773"
          fill="#9400ff"
          ry="0"
        />
        <rect
          width="3.529"
          height="15.233"
          x="614.87"
          y="71.404"
          fill="#ff0"
          ry="0"
        />
        <rect
          className="pink"
          width="3.529"
          height="10.144"
          x="614.87"
          y="100.34"
          fill="#f07"
          ry="0"
        />
      </g>
    </svg>
  </EmblemContainer>
)

export default FooterEmblem
