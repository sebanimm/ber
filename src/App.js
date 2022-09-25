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
	const firstRegex = /<br\/>|\(([^(]+\d{0,15})\)|\([\S]+[^\s]/g;
	const secondRegex = /\s{2}/g;

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Main
							day={day}
							month={month}
							dayOfTheWeek={dayOfTheWeek}
							currentDate={currentDate}
							currentMonth={currentMonth}
							KEY={KEY}
							firstRegex={firstRegex}
							secondRegex={secondRegex}
						/>
					}
				/>
				<Route
					path="/monthlyMeal/:currenMonth"
					element={
						<MonthlyMealInfo
							year={year}
							month={month}
							KEY={KEY}
							firstRegex={firstRegex}
							secondRegex={secondRegex}
						/>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
