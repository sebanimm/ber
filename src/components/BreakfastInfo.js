import BobTimeMain from "../styles/BobTimeMain.js";
import Bob from "./Bob";

const BreakfastInfo = ({ date }) => {
	return (
		<div>
			<BobTimeMain>아침</BobTimeMain>
			<Bob id="0" date={date} />
		</div>
	);
};

export default BreakfastInfo;
