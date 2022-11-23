import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Container from "../styles/Container";
import GlobalFonts from "../fonts/fonts.js";
import Dates from "../styles/Dates";
import Dropdown from "../components/Dropdown";

const A = styled.div`
	padding: 15px;
	width: 640px;
	height: 470px;
	background-color: #98adc7;
	border-radius: 20px;
	margin-top: 20px;
	display: flex;
	justify-content: space-evenly;

	.v {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const B = styled.div`
	width: 100px;
	height: 40px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	text-align: center;
	white-space: pre-wrap;
	font-family: "GothicA1-Light";
	margin: 6.1px;
`;

const C = styled(B)`
	background: #d1d1d1;
`;

const TimetableWrapper = styled.div`
	width: 1000px;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;

	.z {
		height: 100vh;
		width: 100px;
		color: white;
	}

	.a {
		display: flex;
	}

	.s {
		margin-top: auto;
		padding: 15px 0;
		height: 470px;
		width: 100px;
		display: flex;
		flex-direction: column;
		font-size: 24px;
		bottom: 0;
		color: rgb(31, 61, 96);

		p {
			margin: auto 0;
			font-family: "Ultra";
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.g {
		width: 85px;
		text-align: center;
	}
`;

const Timetable = ({ year, month }) => {
	const [grade, setGrade] = useState(1);
	const [className, setClassName] = useState(1);
	const [datas, setDatas] = useState([]);

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
		const secondRegex = /([\s]+[\s])|[\s]/gi;
		const thirdRegex = /\(|\)/gi;
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
					thirdRegex,
					""
				);
				if (grade > 1) {
					timetableInfo = timetableInfo.replace("프로그래밍", "");
				}
				if (timetableInfo.length > 6) {
					timetableInfo = timetableInfo.replace(secondRegex, "\n");
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
						<A>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[0])
									.map((data, index) => (
										<B key={index}>{data[0]}</B>
									))}
								<C>(방과후)</C>
								<C>(방과후)</C>
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[1])
									.map((data, index) => (
										<B key={index}>{data[0]}</B>
									))}
								<C>(방과후)</C>
								<C>(방과후)</C>
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[2])
									.map((data, index) => (
										<B key={index}>{data[0]}</B>
									))}
								<B>자습</B>
								<C>(방과후)</C>
								<C>(방과후)</C>
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[3])
									.map((data, index) => (
										<B key={index}>{data[0]}</B>
									))}
								<C>(방과후)</C>
								<C>(방과후)</C>
							</div>
							<div className="v">
								{datas
									.filter((data) => data[1] === week[4])
									.map((data, index) => (
										<B key={index}>{data[0]}</B>
									))}
							</div>
						</A>
					</div>
				</div>
				<div className="z">
					<Dropdown
						classInfo={`${grade}-${className}`}
						getSelected={getSelected}
					/>
				</div>
			</TimetableWrapper>
		</Container>
	);
};

export default Timetable;
