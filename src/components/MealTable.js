import Container from "../styles/Container";
import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Table from "../styles/Table";
import Column from "../styles/Column";
import Box from "../styles/Box";
import MealTime from "../styles/MealTime";
import MealInfo from "../styles/MealInfo";
import Stepper from "../styles/Stepper";
import TodaysDate from "../styles/TodaysDate";
import Dates from "../styles/Dates";
import Days from "../styles/Days";

const VerticalLine = styled.div`
	border: 2px solid white;
	width: 0;
	height: 430px;
	border-radius: 5px;
	top: 50%;
	background-color: white;
`;

const HorizontalLine = styled(VerticalLine)`
	height: 0;
	width: 73vw;
	top: 50%;
	left: 50%;
	transform: translate(-41.18%);
`;

const MealTable = ({ year, month }) => {
	const [count, setCount] = useState(1);

	const decreaseCount = () => {
		setCount(count - 1);
	};

	const increaseCount = () => {
		setCount(count + 1);
	};

	const [monthlyBreakfast, setMonthlyBreakfast] = useState("");
	const [monthlyLunch, setMonthlyLunch] = useState("");
	const [monthlyDinner, setMonthlyDinner] = useState("");
	const firstDate = new Date(year, month - 1, 1);
	const lastDay = new Date(year, month, 0).getDate();
	const monthSWeek = firstDate.getDay();
	const weekCount = parseInt((lastDay + monthSWeek - 1) / 7) + 1;

	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const thisWeek = [];

	for (let i = 1; i < 6; i++) {
		const date = new Date(year, month - 1, currentDay - 1 + i);
		const day = String(date.getDate()).padStart(2, "0");
		thisWeek[i - 1] = `${year}${month.padStart(2, "0")}${day}`;
	}

	const mealDates = [];
	const breakfasts = [];
	const lunches = [];
	const dinners = [];
	const getMonthlyMealsApi = () => {
		const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
		const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_FROM_YMD=${thisWeek[0]}&MLSV_TO_YMD=${thisWeek[4]}`;
		const firstRegex = /<br\/>|\(([^(]+\d{0,15})\)|\([\S]+[^\s]/g;
		const secondRegex = /\s{2}/g;
		axios.get(URL).then((res) => {
			const datas = res.data.mealServiceDietInfo[1].row;
			for (let data of datas) {
				const mealCode = data.MMEAL_SC_CODE;
				const mealDate = data.MLSV_YMD;
				const mealInfo = data.DDISH_NM.replace(firstRegex, "").replace(
					secondRegex,
					"\n"
				);

				let dateIndex = mealDates.indexOf(mealDate);

				if (dateIndex === -1) {
					mealDates.push(mealDate);
				}

				dateIndex = mealDates.indexOf(mealDate);
				if (mealCode === "1") {
					breakfasts[dateIndex] = mealInfo;
				} else if (mealCode === "2") {
					lunches[dateIndex] = mealInfo;
				} else {
					dinners[dateIndex] = mealInfo;
				}
			}
		});
	};

	useEffect(() => {
		getMonthlyMealsApi();
	}, []);

	return (
		<Container>
			<TodaysDate>
				{year}년 {month}월 급식표
			</TodaysDate>
			<Days>
				<p>월</p>
				<p>화</p>
				<p>수</p>
				<p>목</p>
				<p>금</p>
			</Days>
			<Dates>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
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
							<MealInfo>{monthlyBreakfast}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{monthlyLunch}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{monthlyDinner}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfasts[1]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunches[1]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinners[1]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfasts[2]}</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunches[2]}</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinners[2]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfasts[3]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunches[3]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinners[3]}</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>{breakfasts[4]}</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>{lunches[4]}</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>{dinners[4]}</MealInfo>
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
