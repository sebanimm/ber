import MealTimeMain from "../styles/MealTimeMain.js";
import Meal from "./Meal";

const LunchInfo = ({ date }) => {
	return (
		<div>
			<MealTimeMain>점심</MealTimeMain>
			<Meal id="1" date={date} />
		</div>
	);
};

export default LunchInfo;
