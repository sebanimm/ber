import GlobalFonts from "../fonts/fonts.js";
import Container from "../styles/Container.js";
import TodaysDateMain from "../styles/TodaysDateMain.js";
import BobInfoBtn from "../styles/BobInfoBtn";
import "../styles/App.css";
import BreakfastInfo from "../components/BreakfastInfo";
import LunchInfo from "../components/LunchInfo";
import DinnerInfo from "../components/DinnerInfo";
import { Link } from "react-router-dom";

const Main = () => {
	const date = new Date();
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
	const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
	const currentMonth = currentDate.substring(0, 6);

	return (
		<Container>
			<GlobalFonts />
			<BobInfoBtn>
				<Link to={`/monthlyMeal/${currentMonth}`}>이번달 급식 확인하기</Link>
			</BobInfoBtn>
			<TodaysDateMain>
				{month}월 {day}일 {dayOfTheWeek}요일
			</TodaysDateMain>
			<div className="App">
				<BreakfastInfo date={currentDate} />
				<LunchInfo date={currentDate} />
				<DinnerInfo date={currentDate} />
			</div>
		</Container>
	);
};

export default Main;
