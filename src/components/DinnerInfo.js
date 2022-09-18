import BobTimeMain from "../styles/BobTimeMain.js";
import Bob from "./Bob";

const DinnerInfo = ({ date }) => {
	return (
		<div>
			<BobTimeMain>저녁</BobTimeMain>
			<Bob id="2" date={date} />
		</div>
	);
};

export default DinnerInfo;
