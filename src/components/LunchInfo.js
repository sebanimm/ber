import BobTimeMain from "../styles/BobTimeMain.js";
import Bob from "./Bob";

const LunchInfo = ({ date }) => {
	return (
		<div>
			<BobTimeMain>점심</BobTimeMain>
			<Bob id="1" date={date} />
		</div>
	);
};

export default LunchInfo;
