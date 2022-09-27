import Container from "../styles/Container";
import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Table from "../styles/Table";
import Column from "../styles/Column";
import Stepper from "../styles/Stepper";
import TodaysDate from "../styles/TodaysDate";
import Dates from "../styles/Dates";
import Days from "../styles/Days";
import Box from "../styles/Box";
import MealTime from "../styles/MealTime";
import MealInfo from "../styles/MealInfo";
import VerticalLine from "../styles/VerticalLine";
import HorizontalLine from "../styles/HorizontalLine";
import Day from "../styles/Day";

const MealTable = ({ year, month }) => {
	const [count, setCount] = useState(1);

	const decreaseCount = () => {
		setCount(count - 1);
		setFirstDay(firstDay - 7);
	};

	const increaseCount = () => {
		setCount(count + 1);
		setFirstDay(firstDay + 7);
	};

	const firstDate = new Date(year, month - 1, 1);
	const lastDay = new Date(year, month, 0).getDate();
	const monthSWeek = firstDate.getDay();
	const weekCount = parseInt((lastDay + monthSWeek - 1) / 7) + 1;

	const getMondayDate = (date) => {
		const paramDate = new Date(date);
		const day = paramDate.getDay();
		const diff = paramDate.getDate() - day + (day === 0 ? -6 : 1);
		return diff;
	};

	const [firstDay, setFirstDay] = useState(1);
	const currentWeek = [];
	const months = [];
	const days = [];
	const date = new Date(year, month - 1, firstDay);
	const currentDate = getMondayDate(date);

	for (let i = 1; i < 6; i++) {
		const date = new Date(year, month - 1, currentDate - 1 + i);
		const currentYear = date.getFullYear();
		months[i - 1] = String(date.getMonth() + 1);
		const currentMonth = months[i - 1].padStart(2, "0");
		days[i - 1] = String(date.getDate());
		const currentDay = days[i - 1].padStart(2, "0");
		currentWeek[i - 1] = `${currentYear}${currentMonth}${currentDay}`;
	}

	let [breakfast, setBreakfast] = useState([]);
	let [lunch, setLunch] = useState([]);
	let [dinner, setDinner] = useState([]);

	const getMonthlyMealsApi = () => {
		const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
		const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_FROM_YMD=${currentWeek[0]}&MLSV_TO_YMD=${currentWeek[4]}`;
		const firstRegex = /<br\/>|\(([^(]+\d{0,15})\)|\([\S]+[^\s]/g;
		const secondRegex = /\s{2}/g;
		axios.get(URL).then((res) => {
			const datas = res.data.mealServiceDietInfo[1].row;
			for (let data of datas) {
				const mealCode = data.MMEAL_SC_CODE;
				const mealDate = data.MLSV_YMD;
				const mealDateYear = mealDate.substring(0, 4);
				const mealDateMonth = mealDate.substring(4, 6);
				const mealDateDay = mealDate.substring(6, 8);
				const currentMealDate = `${mealDateYear}-${mealDateMonth}-${mealDateDay}`;
				const mealDay = new Date(currentMealDate).getDay() - 1;
				const mealInfo = data.DDISH_NM.replace(firstRegex, "").replace(
					secondRegex,
					"\n"
				);

				if (mealCode === "1") {
					breakfast[mealDay] = mealInfo;
					setBreakfast(breakfast);
				} else if (mealCode === "2") {
					lunch[mealDay] = mealInfo;
					setLunch(lunch);
				} else {
					dinner[mealDay] = mealInfo;
					setDinner(dinner);
				}
			}
		});
	};

	useEffect(() => {
		breakfast = [];
		lunch = [];
		dinner = [];
		getMonthlyMealsApi();
	}, [count]);

	return (
		<Container>
			<TodaysDate>이번 달 급식표</TodaysDate>
			<Days>
				<p>월</p>
				<p>화</p>
				<p>수</p>
				<p>목</p>
				<p>금</p>
			</Days>
			<Dates>
				<Day>
					{months[0]}월 {days[0]}일
				</Day>
				<Day>
					{months[1]}월 {days[1]}일
				</Day>
				<Day>
					{months[2]}월 {days[2]}일
				</Day>
				<Day>
					{months[3]}월 {days[3]}일
				</Day>
				<Day>
					{months[4]}월 {days[4]}일
				</Day>
			</Dates>
			<div style={{ position: "relative" }}>
				<Stepper>
					<DecreaseBtn onClick={decreaseCount} count={count}>
						<FontAwesomeIcon icon={faArrowUp} style={{ color: "#FFF" }} />
					</DecreaseBtn>
					<p>{count}주차</p>
					<IncreaseBtn
						onClick={increaseCount}
						count={count}
						weekCount={weekCount}
					>
						<FontAwesomeIcon icon={faArrowDown} style={{ color: "#FFF" }} />
					</IncreaseBtn>
				</Stepper>
				<Table>
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfast[0]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunch[0]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinner[0]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfast[1]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunch[1]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinner[1]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfast[2]}</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunch[2]}</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinner[2]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfast[3]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunch[3]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinner[3]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfast[4]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunch[4]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinner[4]}</MealInfo>
						</Box>
					</Column>
				</Table>
			</div>
		</Container>
	);
};

const IncreaseBtn = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 26px;
	background-color: black;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) =>
		props.count === props.weekCount ? "none" : "black"};
	border: ${(props) => (props.count === props.weekCount ? "none" : "black")};
	pointer-events: ${(props) =>
		props.count === props.weekCount ? "none" : "black"};
`;

const DecreaseBtn = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 26px;
	background-color: black;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) => (props.count === 1 ? "none" : "black")};
	border: ${(props) => (props.count === 1 ? "none" : "black")};
	pointer-events: ${(props) => (props.count === 1 ? "none" : "black")};
`;

export default MealTable;
