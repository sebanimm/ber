import GlobalFonts from "../fonts/fonts.js";
import Container from "../styles/Container.js";
import TodaysDateMain from "../styles/TodaysDateMain.js";
import MealInfoBtn from "../styles/MealInfoBtn";
import "../styles/App.css";
import BreakfastInfo from "../components/BreakfastInfo";
import LunchInfo from "../components/LunchInfo";
import DinnerInfo from "../components/DinnerInfo";
import { Link } from "react-router-dom";

const Main = ({ day, month, dayOfTheWeek, currentDate, currentMonth }) => {
	return (
		<Container>
			<GlobalFonts />
			<MealInfoBtn>
				<Link to={`/monthlyMeal/${currentMonth}`}>이번달 급식 확인하기</Link>
			</MealInfoBtn>
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
