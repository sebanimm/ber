import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import Container from "../styles/Container";
import GlobalFonts from "../fonts/fonts.js";
import Dates from "../styles/Dates";

const A = styled.div`
	width: 800px;
	height: 600px;
	background-color: #98adc7;
	border-radius: 50px;
	margin-top: 20px;
`;

const TimetableWrapper = styled.div`
	width: 1200px;
	height: 100vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;

	.z {
		height: 100vh;
		width: 150px;
	}

	.z > .dropdown {
		padding-top: 50px;
	}

	.a {
		display: flex;
	}

	.s {
		width: 100px;
	}
`;

const B = styled.div``;

const Timetable = () => {
	const [grade, setGrade] = useState(1);
	const [className, setClassName] = useState(4);
	const KEY = `3945dd1428d94d0cb836e00bd0a5480d`;
	const URL = `https://open.neis.go.kr/hub/hisTimetable?Key=${KEY}&Type=json&pIndex=1&pSize=300&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&GRADE=${grade}&CLASS_NM=${className}&TI_FROM_YMD=20221114&TI_TO_YMD=20221118`;
	const regex = /(\[\S{0,3}\])/gi;
	axios.get(URL).then((res) => {
		const datas = res.data.hisTimetable[1].row;
		for (let data of datas) {
			const scheduleInfo = data.ITRT_CNTNT.replace(regex, "").replace(
				"자율활동",
				"동아리"
			);
		}
	});

	const options = [
		{ value: "1-1", label: "1학년 1반" },
		{ value: "1-2", label: "1학년 2반" },
		{ value: "1-3", label: "1학년 3반" },
		{ value: "1-4", label: "1학년 4반" },
		{ value: "2-1", label: "2학년 1반" },
		{ value: "2-2", label: "2학년 2반" },
		{ value: "2-3", label: "2학년 3반" },
		{ value: "2-4", label: "2학년 4반" },
		{ value: "3-1", label: "3학년 1반" },
		{ value: "3-2", label: "3학년 2반" },
		{ value: "3-3", label: "3학년 3반" },
		{ value: "3-4", label: "3학년 4반" },
	];
	const defaultOption = options[grade * className - 1];

	return (
		<Container>
			<GlobalFonts />
			<TimetableWrapper>
				<div className="z" />
				<div className="a">
					<div className="s" />
					<div>
						<Dates
							style={{ width: "100%", fontSize: "34px", color: "#1F3D60" }}
						>
							<p>Mon</p>
							<p>Tue</p>
							<p>Wed</p>
							<p>Thu</p>
							<p>Fri</p>
						</Dates>
						<A />
					</div>
				</div>
				<div className="z">
					<ReactDropdown
						className="dropdown"
						options={options}
						value={defaultOption}
						placeholder="선택해주세요."
					/>
				</div>
			</TimetableWrapper>
		</Container>
	);
};

export default Timetable;
