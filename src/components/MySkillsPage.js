import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
@media only screen and (max-width: 800px) {
    top: 120px;
    flex-direction: column;
   
}
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
@media only screen and (max-width: 800px) {
    width: 50vw;
    height: 80vh;
}

z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Data Analytics
</Title>
<Description>
Pursiung a course on Data Analyitcs by Google. Check out my <a href="https://drive.google.com/file/d/1_9oMcYGtcXIZHebjdDhYL2En4g5oa7C0/view?usp=sharing">Resume</a>
</Description>
<Description>
<strong>TOOLS</strong>
<ul>
    <li>
        Excel
    </li>
    <li>
        PowerBI
    </li>
</ul>
</Description>
<Description>
<strong>LANGUAGES AND LIBRARIES</strong>
<ul>
    <li>
       R, Python, Numpi, Pandas
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Developer
</Title>
<Description>
I can make fully functional websites, gaining experience in building applications.
</Description>
<Description>
<strong>Skills</strong>
<p>
Java, Kotlin || Html, Css, Js, React, Express, MongoDB, Node.js etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Android Studio || VScode, Github, Codepen etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
