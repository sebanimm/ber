import GlobalFonts from "./fonts/fonts";
import Container from "./styles/Container.js";
import TodaysDate from "./styles/TodaysDate.js";
import "./styles/App.css";
import BreakfastInfo from "./components/BreakfastInfo";
import LunchInfo from "./components/LunchInfo";
import DinnerInfo from "./components/DinnerInfo";

const App = () => {
	const date = new Date();
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
	const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;

	return (
		<Container>
			<GlobalFonts />
			<TodaysDate>
				{month}월 {day}일 {dayOfTheWeek}요일
			</TodaysDate>
			<div className="App">
				<BreakfastInfo date={currentDate} />
				<LunchInfo date={currentDate} />
				<DinnerInfo date={currentDate} />
			</div>
		</Container>
	);
};

export default App;
