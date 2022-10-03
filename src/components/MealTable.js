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
import Days from "../styles/Days";
import Box from "../styles/Box";
import MealTime from "../styles/MealTime";
import MealInfo from "../styles/MealInfo";
import VerticalLine from "../styles/VerticalLine";
import HorizontalLine from "../styles/HorizontalLine";
import Day from "../styles/Day";
import Dates from "../styles/Dates";

const MealTable = ({ year, month }) => {
	const [count, setCount] = useState(1);
	const [firstDay, setFirstDay] = useState(1);

	const decreaseCount = () => {
		setCount(count - 1);
		setFirstDay(firstDay - 7);
		if (count !== 2) {
			setFirstDay(firstDay - 7);
		} else {
			setFirstDay(1);
		}
	};

	const increaseCount = () => {
		setCount(count + 1);
		if (count !== 5) {
			setFirstDay(firstDay + 7);
		} else {
			const a = firstDay - lastDayOfMonth;
			setFirstDay(firstDay - a);
		}
	};

	const firstDateOfMonth = new Date(year, month - 1, 1);
	const lastDayOfMonth = new Date(year, month, 0).getDate();
	const monthSWeek = firstDateOfMonth.getDay();
	const weekCount = parseInt((lastDayOfMonth + monthSWeek - 1) / 7) + 1;

	const getMondayDate = (date) => {
		const paramDate = new Date(date);
		const day = paramDate.getDay();
		const diff = paramDate.getDate() - day + (day === 0 ? -6 : 1);
		return diff;
	};

	const currentWeek = [];
	const months = [];
	const days = [];
	const firstDate = new Date(year, month - 1, firstDay);
	const currentDate = getMondayDate(firstDate);

	for (let i = 1; i < 6; i++) {
		const date = new Date(year, month - 1, currentDate - 1 + i);
		const currentYear = date.getFullYear();
		months[i - 1] = String(date.getMonth() + 1);
		const currentMonth = months[i - 1].padStart(2, "0");
		days[i - 1] = String(date.getDate());
		const currentDay = days[i - 1].padStart(2, "0");
		currentWeek[i - 1] = `${currentYear}${currentMonth}${currentDay}`;
		console.log(currentWeek[i - 1]);
	}

	let [breakfast, setBreakfast] = useState([]);
	let [lunch, setLunch] = useState([]);
	let [dinner, setDinner] = useState([]);

	const getMonthlyMeals = () => {
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
		breakfast = [
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
		];
		lunch = [
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
		];
		dinner = [
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
			"급식 정보 없음",
		];
		getMonthlyMeals();
	}, [count]);

	return (
		<Container>
			<TodaysDate>Monthly Meal</TodaysDate>
			<Dates>
				<p style={{ width: "100px", textAlign: "center" }}>Mon</p>
				<p style={{ width: "100px", textAlign: "center" }}>Tue</p>
				<p style={{ width: "100px", textAlign: "center" }}>Wed</p>
				<p style={{ width: "100px", textAlign: "center" }}>Thu</p>
				<p style={{ width: "100px", textAlign: "center" }}>Fri</p>
			</Dates>
			<Days>
				<Day>
					{months[0]}/{days[0]}
				</Day>
				<Day>
					{months[1]}/{days[1]}
				</Day>
				<Day>
					{months[2]}/{days[2]}
				</Day>
				<Day>
					{months[3]}/{days[3]}
				</Day>
				<Day>
					{months[4]}/{days[4]}
				</Day>
			</Days>
			<div style={{ position: "relative" }}>
				<Stepper>
					<DecreaseBtn onClick={decreaseCount} count={count}>
						<FontAwesomeIcon
							icon={faArrowUp}
							count={count}
							style={{
								color: "#FFF",
								display: count === 1 ? "none" : "block",
							}}
						/>
					</DecreaseBtn>
					<p style={{ fontFamily: "GothicA1-Light", color: "#98ADC7" }}>
						{count}주차
					</p>
					<IncreaseBtn
						onClick={increaseCount}
						count={count}
						weekCount={weekCount}
					>
						<FontAwesomeIcon
							icon={faArrowDown}
							style={{
								color: "#FFF",
								display: count === weekCount ? "none" : "block",
							}}
						/>
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
	background-color: #98adc7;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) =>
		props.count === props.weekCount ? "none" : "#98ADC7"};
	border: ${(props) => (props.count === props.weekCount ? "none" : "#98ADC7")};
	pointer-events: ${(props) =>
		props.count === props.weekCount ? "none" : "#98ADC7"};
`;

const DecreaseBtn = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 26px;
	background-color: #98adc7;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) => (props.count === 1 ? "none" : "#98ADC7")};
	border: ${(props) => (props.count === 1 ? "none" : "#98ADC7")};
	pointer-events: ${(props) => (props.count === 1 ? "none" : "#98ADC7")};
`;

export default MealTable;
