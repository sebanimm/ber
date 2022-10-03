import React from "react";
import styled from "styled-components";

const EventWrapper = styled.div`
	text-align: center;
	width: 22%;
	height: 34%;
	margin: 1.5%;
	padding: 1% 0 4% 0;
	background-color: #e3ecf6;
	border-radius: 35px;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	font-family: "GothicA1-Regular";
	font-size: 20px;
`;

const EventHeader = styled.div`
	font-size: 30px;
	width: 100%;
	height: 20%;
`;

const EventInfo = ({ name, day }) => {
	return (
		<EventWrapper>
			<EventHeader>{day}일</EventHeader>
			{name}
		</EventWrapper>
	);
};

export default EventInfo;
