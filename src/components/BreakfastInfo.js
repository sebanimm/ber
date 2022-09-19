import MealTimeMain from "../styles/MealTimeMain.js";
import Meal from "./Meal";

const BreakfastInfo = ({ date }) => {
	return (
		<div>
			<MealTimeMain>아침</MealTimeMain>
			<Meal id="0" date={date} />
		</div>
	);
};

export default BreakfastInfo;
