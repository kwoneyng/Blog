import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom"

const ImgSrc = "https://www.artinsight.co.kr/data/tmp/1908/1501cf89202c25ce439949ffd767c3dd_IUDfUfz6jJVJ.jpg" 
const SkillImg = "https://ichef.bbci.co.uk/news/800/cpsprodpb/DFCB/production/_104119275_gettyimages-513750122.jpg" 
const AboutMe = () => {
    return (
        <div>
            <Intro >
                <Context>
                    나에대한 소개가 들어갈 자리에요!
                </Context>
                <AboutMeLinks>
                    <Link to="/problem" style={links}>PS</Link><br/>
                    <Link to="/til" style={links}>TIL</Link><br/>
                    <Link to="/about" style={links}>About Me</Link><br/>
                    <Link to="/portfolio" style={links}>Portfolio</Link>
                </AboutMeLinks>
            </Intro>
            <Skills>홀리몰리</Skills>
        </div>
    )
}

export default AboutMe;

const Intro = styled.div `
	background-image: url(${ImgSrc});
	background-size: 100%;
	width: 100vw;
	height: 100vh;
`;

const Skills = styled.div `
	background-image: url(${SkillImg});
	background-size: 100%;
	width: 100vw;
	height: 100vh;
`;

const Context = styled.div `
	font-size: 82px;
	position: absolute;
	width: 650px;
	height: 150px;
	top: 40%;
	left: 10%;
`;

const AboutMeLinks = styled.div `
	font-size: 82px;
	position: absolute;
	width: 400px;
	top: 25%;
	right: 10%;
	color: black;
	text-align: right;
`;

const links = {
    textDecoration: 'none',
    color: 'black'
}
