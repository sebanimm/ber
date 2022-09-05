import BobTime from "../styles/BobTime.js";
import Bob from "./Bob";

const DinnerInfo = ({ date }) => {
  return (
    <div>
      <BobTime>저녁</BobTime>
      <Bob id="2" date={date} />
    </div>
  );
};

export default DinnerInfo;
