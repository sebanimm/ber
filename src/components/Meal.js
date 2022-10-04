import { React, useState, useEffect } from "react";
import axios from "axios";
import MealHeader from "../styles/MealHeader.js";
import MealInfoMain from "../styles/MealInfoMain.js";
import CalInfo from "../styles/CalInfo.js";
import FirstCircle from "../styles/FirstCircle.js";
import SecondCircle from "../styles/SecondCircle.js";
import ThirdCircle from "../styles/ThirdCircle.js";
import styled from "styled-components";

let tasty;

const Meal = ({ id, date }) => {
	const [mealInfo, setMealInfo] = useState("급식 정보가 없습니다.");
	const [mealCalInfo, setMealCalInfo] = useState("");
	const [mealTaste, setMealTaste] = useState("");

	const getMealApi = () => {
		const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
		const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${date}`;
		const firstRegex = /<br\/>|\(([^(]+\d{0,15})\)|\([\S]+[^\s]/g;
		const secondRegex = /\s{2}/g;

		axios.get(URL).then((res) => {
			const data = res.data.mealServiceDietInfo[1].row;

			const getMealInfo = (typeOfMeal) => {
				const meal = data[typeOfMeal].DDISH_NM.replace(firstRegex, "").replace(
					secondRegex,
					"\n"
				);
				setMealInfo(meal);

				const mealCal = data[typeOfMeal].CAL_INFO;
				setMealCalInfo(mealCal);

				if (parseInt(mealCal) >= 850) {
					setMealTaste("~/맛있음/");
					tasty = true;
				} else {
					setMealTaste("~/평균/");
					tasty = false;
				}
			};

			getMealInfo(id);
		});
	};

	let nowUrl = window.location.pathname;

	useEffect(() => {
		getMealApi();
	}, [nowUrl]);

	return (
		<MealWrapper isTasty={tasty === true ? true : false}>
			<MealHeader>
				<FirstCircle />
				<SecondCircle />
				<ThirdCircle />
				<CalInfo>
					{mealTaste}
					{mealCalInfo}
				</CalInfo>
			</MealHeader>
			<MealInfoMain>{mealInfo}</MealInfoMain>
		</MealWrapper>
	);
};

const MealWrapper = styled.div`
	width: 300px;
	height: 300px;
	background: ${(props) => (props.isTasty ? "#6D839E" : "#000000")};
	box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	position: relative;
	text-align: center;
`;

export default Meal;
