import styled from 'styled-components';
import React, {useState} from 'react';
import Card from '../components/SummaryCard'
import { firestore } from "../firebase";

const AboutMe = () => {
    const terms = ['Month', 'Week', 'Day']
    const cnts = [5, 3, 2]
    let [termIdx, setTermIdx] = useState(0)
    firestore.collection('PS').get().then(item=>{
        item.forEach(doc=>{
            console.log(doc.data())
        })
    })

    return (
        <Body>
            <h1 style={mp0}>What did I learn this {terms[termIdx]}</h1>
            <Tag
                onClick={() => {
                    console.log('click')
                    setTermIdx((termIdx + 1) % 3)
                }}>
                {terms[termIdx]}
                ({cnts[termIdx]})
            </Tag>
            <Card type="JS" title="Promise란 무엇인가" subtitle="비동기 처리" hashTag={['비동기', 'Promise']}/>
            <Card type="PS" title="프로그래머스 동굴탐험" subtitle="2020 카카오 블라인드" hashTag={['위상정렬', 'Tree']}/>
            <Card type="CS" title="CPU 스케줄링" subtitle="스케줄링" hashTag={['운영체제', '페이징']}/>
            <Card type="React" title="Props란?" subtitle="Props를 통한 component간의 값 넘겨주기" hashTag={['React', 'component']}/>
        </Body>
    )
}

export default AboutMe;

const Body = styled.div `
margin: 0px;
padding: 0px;
margin-top: 90px;
width: 80%;
margin-left: 10%;
`;

const Tag = styled.button `
padding: 3px 5px;
background-color: #123421;
text-align:center;
color: white;
margin-top:20px;
border-radius:5px;
margin-left: 30px;
font-size: 18px;
`;

const mp0={
    margin:0,
    padding:0
}