import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BobHeader from "../styles/BobHeader.js";
import BobInfoMain from "../styles/BobInfoMain.js";
import CalInfo from "../styles/CalInfo.js";
import FirstCircle from "../styles/FirstCircle.js";
import SecondCircle from "../styles/SecondCircle.js";
import ThirdCircle from "../styles/ThirdCircle.js";
import styled from "styled-components";

const BobWrapper = styled.div`
	width: 300px;
	height: 300px;
	background: ${(props) =>
		props.isTasty
			? "linear-gradient(180deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)"
			: "#000000"};
	box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	position: relative;
	text-align: center;
`;

let taste;

const Bob = ({ id, date }) => {
	const [bobInfo, setBobInfo] = useState("급식 정보가 없습니다.");
	const [bobCalInfo, setBobCalInfo] = useState("");
	let [bobTaste, setBobTaste] = useState("");

	const getBobApi = () => {
		const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${date}`;
		const firstRegex = /<br\/>|\([^\)]*\)/g;
		const secondRegex = /\s{2}/g;
		axios.get(URL).then((res) => {
			const data = res.data.mealServiceDietInfo[1].row;

			const getBobInfo = (typeOfBob) => {
				const bob = data[typeOfBob].DDISH_NM.replace(firstRegex, "").replace(
					secondRegex,
					"\n"
				);
				setBobInfo(bob);
				const bobCal = data[typeOfBob].CAL_INFO;
				setBobCalInfo(bobCal);

				if (parseInt(bobCal) >= 800) {
					bobTaste = "~/맛있음/";
					taste = true;
				} else {
					bobTaste = "~/평균/";
					taste = false;
				}

				setBobTaste(bobTaste);
			};

			getBobInfo(id);
		});
	};

	let nowUrl = window.location.pathname;

	useEffect(() => {
		getBobApi();
	}, [nowUrl]);

	return (
		<BobWrapper isTasty={taste === true ? true : false}>
			<BobHeader>
				<FirstCircle />
				<SecondCircle />
				<ThirdCircle />
				<CalInfo>
					{bobTaste}
					{bobCalInfo}
				</CalInfo>
			</BobHeader>
			<BobInfoMain>{bobInfo}</BobInfoMain>
		</BobWrapper>
	);
};

export default Bob;
