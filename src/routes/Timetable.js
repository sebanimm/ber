import { React, useEffect, useState } from "react";
import axios from "axios";
import GlobalFonts from "../fonts/fonts.js";
import Container from "../styles/Container";
import Dates from "../styles/Dates";
import Dropdown from "../components/Dropdown";
import {
	TimetableWrapper,
	ClassesTable,
	Classes,
	AfterClasses,
} from "../styles/styles.js";

const Timetable = ({ year, month }) => {
	const [grade, setGrade] = useState(1);
	const [className, setClassName] = useState(4);
	const [datas, setDatas] = useState([]);
	const classInfo = `${grade}-${className}`;

	const afterClasses = [
		["1-1", "월", "JAVA"],
		["1-1", "월", "JAVA"],
		["1-1", "화", "토익"],
		["1-1", "화", "네트워크"],
		["1-1", "수", "네트워크"],
		["1-1", "수", "프로젝트"],
		["1-2", "월", "JAVA"],
		["1-2", "월", "JAVA"],
		["1-2", "화", "토익"],
		["1-2", "화", "네트워크"],
		["1-2", "수", "네트워크"],
		["1-2", "수", "프로젝트"],
		["1-3", "월", "JAVA"],
		["1-3", "월", "JAVA"],
		["1-3", "화", "토익"],
		["1-3", "화", "네트워크"],
		["1-3", "수", "네트워크"],
		["1-3", "수", "프로젝트"],
		["1-4", "월", "JAVA"],
		["1-4", "월", "JAVA"],
		["1-4", "화", "토익"],
		["1-4", "화", "네트워크"],
		["1-4", "수", "네트워크"],
		["1-4", "수", "프로젝트"],
		["2-1", "월", "JAVA"],
		["2-1", "월", "JAVA"],
		["2-1", "화", "토익"],
		["2-1", "화", "네트워크"],
		["2-1", "수", "네트워크"],
		["2-1", "수", "프로젝트"],
		["2-2", "월", "JAVA"],
		["2-2", "월", "JAVA"],
		["2-2", "화", "토익"],
		["2-2", "화", "네트워크"],
		["2-2", "수", "네트워크"],
		["2-2", "수", "프로젝트"],
		["2-3", "월", "JAVA"],
		["2-3", "월", "JAVA"],
		["2-3", "화", "토익"],
		["2-3", "화", "네트워크"],
		["2-3", "수", "네트워크"],
		["2-3", "수", "프로젝트"],
		["2-4", "월", "JAVA"],
		["2-4", "월", "JAVA"],
		["2-4", "화", "토익"],
		["2-4", "화", "네트워크"],
		["2-4", "수", "네트워크"],
		["2-4", "수", "프로젝트"],
	];

	const getSelected = (grade, className) => {
		setGrade(grade);
		setClassName(className);
	};

	const getMondayDate = (date) => {
		const paramDate = new Date(date);
		const day = paramDate.getDay();
		const diff = paramDate.getDate() - day + (day === 0 ? -6 : 1);
		return diff;
	};

	const currentWeek = [];
	const week = [];
	const date = new Date();
	const mondayOfTheFirstWeek = getMondayDate(date);

	for (let i = 0; i < 5; i++) {
		const date = new Date(year, month - 1, mondayOfTheFirstWeek + i);
		const currentYear = date.getFullYear();
		const months = String(date.getMonth() + 1);
		const currentMonth = months.padStart(2, "0");
		const days = String(date.getDate());
		const currentDay = days.padStart(2, "0");
		currentWeek[i] = `${currentYear}${currentMonth}${currentDay}`;
		week[i] = `${currentYear}-${currentMonth}-${currentDay}`;
	}

	const getTimetableInfo = () => {
		const firstRegex = /(\[\S{0,3}\])/gi;
		const secondRegex = /\(|\)/gi;
		const thirdRegex = /([\s]+[\s])|[\s]/gi;
		const KEY = `3945dd1428d94d0cb836e00bd0a5480d`;
		const URL = `https://open.neis.go.kr/hub/hisTimetable?Key=${KEY}&Type=json&pIndex=1&pSize=300&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&GRADE=${grade}&CLASS_NM=${className}&TI_FROM_YMD=${currentWeek[0]}&TI_TO_YMD=${currentWeek[4]}`;
		axios.get(URL).then((res) => {
			const datas = res.data.hisTimetable[1].row;
			const x = [];
			for (let data of datas) {
				const timetableYMD = data.ALL_TI_YMD;
				const year = timetableYMD.substring(0, 4);
				const month = timetableYMD.substring(4, 6);
				const day = timetableYMD.substring(6, 8);
				const YMD = `${year}-${month}-${day}`;
				let timetableInfo = data.ITRT_CNTNT.replace(firstRegex, "").replace(
					secondRegex,
					""
				);
				if (grade > 1) {
					timetableInfo = timetableInfo.replace("프로그래밍", "");
				}
				if (timetableInfo.length > 6) {
					timetableInfo = timetableInfo.replace(thirdRegex, "\n");
				}
				x.push([timetableInfo, YMD]);
			}
			setDatas(x);
		});
	};

	useEffect(() => {
		getTimetableInfo();
	}, [grade, className]);

	return (
		<Container>
			<GlobalFonts />
			<TimetableWrapper>
				<div className="a">
					<div className="s">
						<p>1</p>
						<p>2</p>
						<p>3</p>
						<p>4</p>
						<p>5</p>
						<p>6</p>
						<p>7</p>
						<p>8-9</p>
						<p>10-11</p>
					</div>
					<div>
						<Dates
							style={{
								width: "100%",
								fontSize: "30px",
								color: "#1F3D60",
								justifyContent: "space-evenly",
							}}
						>
							<p className="g">Mon</p>
							<p className="g">Tue</p>
							<p className="g">Wed</p>
							<p className="g">Thu</p>
							<p className="g">Fri</p>
						</Dates>
						<ClassesTable>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[0])
									.map((data, index) => (
										<Classes key={index}>{data[0]}</Classes>
									))}
								{afterClasses
									.filter((data) => data[0] === classInfo && data[1] === "월")
									.map((data, index) => (
										<AfterClasses key={index}>{data[2]}</AfterClasses>
									))}
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[1])
									.map((data, index) => (
										<Classes key={index}>{data[0]}</Classes>
									))}
								{afterClasses
									.filter((data) => data[0] === classInfo && data[1] === "화")
									.map((data, index) => (
										<AfterClasses key={index}>{data[2]}</AfterClasses>
									))}
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[2])
									.map((data, index) => (
										<Classes key={index}>{data[0]}</Classes>
									))}
								<AfterClasses>자습</AfterClasses>
								{afterClasses
									.filter((data) => data[0] === classInfo && data[1] === "수")
									.map((data, index) => (
										<AfterClasses key={index}>{data[2]}</AfterClasses>
									))}
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[3])
									.map((data, index) => (
										<Classes key={index}>{data[0]}</Classes>
									))}
								<AfterClasses>전공동아리</AfterClasses>
								<AfterClasses>전공동아리</AfterClasses>
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[4])
									.map((data, index) => (
										<Classes key={index}>{data[0]}</Classes>
									))}
							</div>
						</ClassesTable>
					</div>
				</div>
				<div className="z">
					<Dropdown classInfo={classInfo} getSelected={getSelected} />
				</div>
			</TimetableWrapper>
		</Container>
	);
};

export default Timetable;
