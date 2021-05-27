import React, { useState } from 'react';
import styled from 'styled-components';

const Card = ({type, title, subtitle, hashTag}) => {
	const backColor = ["#ffffff", "#eeeeee"]
	let [isHover, setIsHover] = useState(0)
	const tagsRendering = () => {
		const result = [];
		for (let i=0; i< hashTag.length; i++){
			result.push("#"+hashTag[i]+' ');
		}
		return result
	}
	return (
		<div 
			style = {{backgroundColor:backColor[isHover], borderRadius:5, padding:'10px', marginTop:'20px'}}
			onMouseEnter={(event)=>{
				setIsHover(1)
				console.log(isHover)
			}}
			onMouseLeave={(event)=>{
				setIsHover(0)
				console.log(isHover)
			}}
		>
			<TypeButton>{type}</TypeButton>
			<h3 style={mp0}>{title}</h3>
			<h5 style={mp0}>{subtitle}</h5>
			<h6 style={hashTagStyle}>{tagsRendering()}</h6>
		</div>
	)
}

export default Card;

const mp0={
	margin:0,
	padding:0
}

const hashTagStyle = {
	margin:0,
	padding:0,
	color:'#1212cc'
}

const TypeButton = styled.button`
	background-color: #123421;
	color: white;
	padding: 5px;
	border-radius: 3px;
	border: 0px;
`;