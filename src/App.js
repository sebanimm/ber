import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MonthlyMealInfo from "./routes/MonthlyMealInfo";

const App = () => {
	const date = new Date();
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
	const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
	const currentMonth = currentDate.substring(0, 6);
	const KEY = "3945dd1428d94d0cb836e00bd0a5480d";
	const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${currentMonth}`;

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Main
							month={month}
							day={day}
							dayOfTheWeek={dayOfTheWeek}
							currentDate={currentDate}
						/>
					}
				/>
				<Route
					path="/monthlyMeal/:currenMonth"
					element={<MonthlyMealInfo year={year} month={month} URL={URL} />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
