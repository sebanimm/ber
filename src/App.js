import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MonthlyMealInfo from "./routes/MonthlyMealInfo";
import Event from "./routes/Event";
import ProfileEdit from "./routes/ProfileEdit";

const App = () => {
	const date = new Date();
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
	const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
	const currentMonth = currentDate.substring(0, 6);

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
						/>
					}
				/>
				<Route
					path="/monthlyMeal/:currentMonth"
					element={<MonthlyMealInfo year={year} month={month} />}
				/>
				<Route
					path="/events/:year"
					element={<Event currentYear={year} currentMonth={month} />}
				/>
				<Route path="/profileEdit/:userName" element={<ProfileEdit />} />
			</Routes>
		</Router>
	);
};

export default App;
