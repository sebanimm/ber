import { React, useState, useEffect } from "react";
import axios from "axios";
import GlobalFonts from "../fonts/fonts.js";
import EventInfo from "../components/EventInfo";
import Container from "../styles/Container";
import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Events = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 900px;
	height: 450px;
	margin: 0 auto;
	justify-content: flex-start;
`;

const Month = styled.div`
	padding: 15vh 0 10vh 0;
	height: 10vh;
	text-align: center;
	font-family: "GothicA1-Regular";
	font-size: 60px;
	min-width: 00px;
`;

const NextBtn = styled.div`
	width: 70px;
	height: 70px;
	position: absolute;
	top: 50%;
	right: 3%;
	transform: translateY(-50%);
`;

const PrevBtn = styled(NextBtn)`
	left: 3%;
`;

const Event = ({ year, currentMonth }) => {
	const [events, setEvents] = useState([]);
	const [month, setMonth] = useState(parseInt(currentMonth));

	const nextMonth = () => {
		setMonth(month + 1);
	};

	const prevMonth = () => {
		setMonth(month - 1);
	};

	const event = [];
	const eventNames = [];
	let i = 0;
	const getEvents = () => {
		const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
		const URL = `https://open.neis.go.kr/hub/SchoolSchedule?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&AA_YMD=${year}${String(
			month
		).padStart(2, "0")}`;
		axios.get(URL).then((res) => {
			const datas = res.data.SchoolSchedule[1].row;
			for (let data of datas) {
				const eventDate = data.AA_YMD;
				const eventName = data.EVENT_NM;
				const eventDateYear = eventDate.substring(0, 4);
				const eventDateMonth = eventDate.substring(4, 6);
				const eventDateDay = eventDate.substring(6, 8);
				const currentEventDate = `${eventDateYear}-${eventDateMonth}-${eventDateDay}`;
				const eventDay = new Date(currentEventDate).getDay();

				if (eventDay >= 1 && eventDay <= 5) {
					if (eventNames.indexOf(eventName) < 0) {
						eventNames[i] = `${eventName}`;
						event[i] = { name: `${eventName}`, date: `${eventDate}` };
					}
					i += 1;
				}
			}
			setEvents(event);
		});
	};

	useEffect(() => {
		getEvents();
	}, [month]);

	return (
		<Container>
			<GlobalFonts />
			<Month>{month}월</Month>
			<div style={{ position: "relative" }}>
				<PrevBtn onClick={prevMonth}>
					<FontAwesomeIcon
						icon={faPlay}
						style={{ width: "100%", height: "100%", transform: "scaleX(-1)" }}
					/>
				</PrevBtn>
				<NextBtn onClick={nextMonth}>
					<FontAwesomeIcon
						icon={faPlay}
						style={{ width: "100%", height: "100%" }}
					/>
				</NextBtn>
				<Events>
					{events.map((event) => (
						<EventInfo
							key={event.date}
							name={event.name}
							day={parseInt(event.date.substring(6, 8))}
						/>
					))}
				</Events>
			</div>
		</Container>
	);
};

export default Event;
