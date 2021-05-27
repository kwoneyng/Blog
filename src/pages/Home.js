import styled from 'styled-components';
import React, {useState} from 'react';
import Card from '../components/Card'

const AboutMe = () => {
    const tags = ['all', 'PS', 'TIL']
    const cnts = [5, 3, 2]
    let [tagIdx, setTagIdx] = useState(0)
    const [tag, setTag] = useState(tags[tagIdx])
    const [cnt, setCnt] = useState(cnts[tagIdx])
    return (
        <Body>
            <Tag
                onClick={() => {
                    console.log('click')
                    setTagIdx((tagIdx + 1) % 3)
                    setTag(tags[tagIdx])
                    setCnt(cnts[tagIdx])
                }}>
                {tag}
                ({cnt})
            </Tag>
            <Card title="럴수럴수 이럴수" subtitle="hey" hashTag="bye"/>
            <Card title="럴수럴수 이럴수" subtitle="hey" hashTag="bye"/>
            <Card title="럴수럴수 이럴수" subtitle="hey" hashTag="bye"/>
        </Body>
    )
}

export default AboutMe;

const Body = styled.div `
margin: 0px;
padding: 0px;
margin-top: 120px;
width: 80%;
margin-left: 10%;
`;

const Tag = styled.a `
padding: 3px 5px;
background-color: #123421;
text-align:center;
color: white;
border-radius:5px;
margin-left: 30px;
font-size: 18px;
`;