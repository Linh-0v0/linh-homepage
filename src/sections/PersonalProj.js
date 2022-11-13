import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
position: relative;
height: 100vh;
width: 80vw;
overflow: hidden;
margin: 0 auto;
`

const PersonalProj = () => {
  return (
    <Section data-scroll-section><h1>Personal Projects</h1></Section>
  )
}

export default PersonalProj