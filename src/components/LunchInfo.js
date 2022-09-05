import BobTime from "../styles/BobTime.js";
import Bob from "./Bob";

const LunchInfo = ({ date }) => {
  return (
    <div>
      <BobTime>점심</BobTime>
      <Bob id="1" date={date} />
    </div>
  );
};

export default LunchInfo;
