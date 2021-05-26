
import React, { useState } from 'react';

const Card = ({title, subtitle, hashTag}) => {
	const backColor = ["#ffffff", "#eeeeee"]
	let [isHover, setIsHover] = useState(0)
	return (
		<div 
			style = {{backgroundColor:backColor[isHover], borderRadius:5, padding:'10px'}}
			onMouseEnter={(event)=>{
				setIsHover(1)
				console.log(isHover)
			}}
			onMouseLeave={(event)=>{
				setIsHover(0)
				console.log(isHover)
			}}
		>
			<h3>{title}</h3>
			<h6>{subtitle}</h6>
			{ hashTag}
		</div>
	)
}

export default Card;
