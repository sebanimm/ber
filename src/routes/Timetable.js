import React from "react";
import styled from "styled-components";
import axios from "axios";
import Container from "../styles/Container";

const a = styled.div``;

const Timetable = () => {
	const KEY = `3945dd1428d94d0cb836e00bd0a5480d`;
	const URL = `https://open.neis.go.kr/hub/hisTimetable?Key=${KEY}&Type=json&pIndex=1&pSize=300&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&TI_FROM_YMD=20221114&TI_TO_YMD=20221118`;

	axios.get(URL).then((res) => {
		const datas = res.data.hisTimetable[1].row;
		for (let data of datas) {
			console.log(data.ITRT_CNTNT);
		}
	});
	return (
		<Container>
			<h1>ㅎㅇ</h1>
		</Container>
	);
};

export default Timetable;
