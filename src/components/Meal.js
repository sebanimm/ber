import { React, useState, useEffect } from "react";
import axios from "axios";
import MealHeader from "../styles/MealHeader.js";
import MealInfoMain from "../styles/MealInfoMain.js";
import CalInfo from "../styles/CalInfo.js";
import FirstCircle from "../styles/FirstCircle.js";
import SecondCircle from "../styles/SecondCircle.js";
import ThirdCircle from "../styles/ThirdCircle.js";
import styled from "styled-components";

const MealWrapper = styled.div`
	width: 300px;
	height: 300px;
	background: ${(props) => (props.isTasty ? "#6D839E" : "#000000")};
	box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	position: relative;
	text-align: center;
`;

let taste;

const Meal = ({ id, date }) => {
	const [MealInfo, setMealInfo] = useState("급식 정보가 없습니다.");
	const [MealCalInfo, setMealCalInfo] = useState("");
	let [MealTaste, setMealTaste] = useState("");

	const getMealApi = () => {
		const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
		const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${date}`;
		const firstRegex = /<br\/>|\([^\)]*\)/g;
		const secondRegex = /\s{2}/g;
		axios.get(URL).then((res) => {
			const data = res.data.mealServiceDietInfo[1].row;

			const getMealInfo = (typeOfMeal) => {
				const Meal = data[typeOfMeal].DDISH_NM.replace(firstRegex, "").replace(
					secondRegex,
					"\n"
				);
				setMealInfo(Meal);
				const MealCal = data[typeOfMeal].CAL_INFO;
				setMealCalInfo(MealCal);

				if (parseInt(MealCal) >= 800) {
					MealTaste = "~/맛있음/";
					taste = true;
				} else {
					MealTaste = "~/평균/";
					taste = false;
				}

				setMealTaste(MealTaste);
			};

			getMealInfo(id);
		});
	};

	let nowUrl = window.location.pathname;

	useEffect(() => {
		getMealApi();
	}, [nowUrl]);

	return (
		<MealWrapper isTasty={taste === true ? true : false}>
			<MealHeader>
				<FirstCircle />
				<SecondCircle />
				<ThirdCircle />
				<CalInfo>
					{MealTaste}
					{MealCalInfo}
				</CalInfo>
			</MealHeader>
			<MealInfoMain>{MealInfo}</MealInfoMain>
		</MealWrapper>
	);
};

export default Meal;
