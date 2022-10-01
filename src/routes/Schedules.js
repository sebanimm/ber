import { React, useState } from "react";
import axios from "axios";

const Schedules = ({ currentMonth }) => {
	const [day, setDay] = useState([]);
	const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
	const URL = `https://open.neis.go.kr/hub/SchoolSchedule?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&AA_YMD=${currentMonth}`;
	axios.get(URL).then((res) => {
		const datas = res.data.SchoolSchedule[1].row;
		for (let data of datas) {
			const scheduleDate = data.AA_YMD;
			const scheduleDateYear = scheduleDate.substring(0, 4);
			const scheduleDateMonth = scheduleDate.substring(4, 6);
			const scheduleDateDay = scheduleDate.substring(6, 8);
			const currentScheduleDate = `${scheduleDateYear}-${scheduleDateMonth}-${scheduleDateDay}`;
			const scheduleDay = new Date(currentScheduleDate).getDay();

			if (scheduleDay === 0 || scheduleDay === 6) {
				console.log(`${scheduleDate} 주말`);
			}
		}
	});

	return <div>aaaaaaaaaaaaaaaaa</div>;
};

export default Schedules;
