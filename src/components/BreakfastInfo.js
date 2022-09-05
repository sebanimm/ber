import BobTime from "../styles/BobTime.js";
import Bob from "./Bob";

const BreakfastInfo = ({ date }) => {
  return (
    <div>
      <BobTime>아침</BobTime>
      <Bob id="0" date={date} />
    </div>
  );
};

export default BreakfastInfo;
