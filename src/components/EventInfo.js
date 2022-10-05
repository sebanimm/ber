import React from "react";
import EventWrapper from "../styles/EventWrapper";
import EventHeader from "../styles/EventHeader";

const EventInfo = ({ name, day }) => {
	return (
		<EventWrapper>
			<EventHeader>{day}일</EventHeader>
			{name}
		</EventWrapper>
	);
};

export default EventInfo;
