import MealTimeMain from "../styles/MealTimeMain.js";
import Meal from "./Meal";

const DinnerInfo = ({ date }) => {
	return (
		<div>
			<MealTimeMain>저녁</MealTimeMain>
			<Meal id="2" date={date} />
		</div>
	);
};

export default DinnerInfo;
