import React from "react";
import EventWrapper from "../styles/EventWrapper";
import EventHeader from "../styles/EventHeader";

const EventInfo = ({ name, date, day }) => {
	return (
		<EventWrapper>
			<EventHeader>
				{date}일 ({day})
			</EventHeader>
			{name}
		</EventWrapper>
	);
};

export default EventInfo;
