import { useState, useEffect } from "react";
import axios from "axios";
import GlobalFonts from "./fonts/fonts";
import Container from "./styles/Container.js";
import TodaysDate from "./styles/TodaysDate.js";
import BobTime from "./styles/BobTime.js";
import Bob from "./styles/Bob.js";
import BobHeader from "./styles/BobHeader.js";
import BobInfo from "./styles/BobInfo.js";
import CalInfo from "./styles/CalInfo.js";
import FirstCircle from "./styles/FirstCircle.js";
import SecondCircle from "./styles/SecondCircle.js";
import ThirdCircle from "./styles/ThirdCircle.js";
import "./styles/App.css";

function App() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
  const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;

  const [breakfastInfo, setBreakfastInfo] = useState("급식 정보가 없습니다.");
  const [lunchInfo, setLunchInfo] = useState("급식 정보가 없습니다.");
  const [dinnerInfo, setDinnerInfo] = useState("급식 정보가 없습니다.");
  const [breakfastCalInfo, setBreakfastCalInfo] = useState("");
  const [lunchCalInfo, setLunchCalInfo] = useState("");
  const [dinnerCalInfo, setDinnerCalInfo] = useState("");
  let [breakfastTaste, setBreakfastTaste] = useState("");
  let [lunchTaste, setLunchTaste] = useState("");
  let [dinnerTaste, setDinnerTaste] = useState("");

  const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${currentDate}`;
  const firstRegex = /<br\/>|\([^\)]*\)/g;
  const secondRegex = /\s{2}/g;
  const getBobInfo = () => {
    axios.get(URL).then((res) => {
      const data = res.data.mealServiceDietInfo[1].row;
      const breakfast = data[0].DDISH_NM.replace(firstRegex, "").replace(
        secondRegex,
        "\n"
      );
      setBreakfastInfo(breakfast);
      const breakfastCal = data[0].CAL_INFO;
      setBreakfastCalInfo(breakfastCal);

      if (parseInt(breakfastCal) >= 800) {
        breakfastTaste = "~/맛있음/";
      } else {
        breakfastTaste = "~/평균/";
      }
      setBreakfastTaste(breakfastTaste);

      const lunch = data[1].DDISH_NM.replace(firstRegex, "").replace(
        secondRegex,
        "\n"
      );
      setLunchInfo(lunch);
      const lunchCal = data[1].CAL_INFO;
      setLunchCalInfo(lunchCal);

      if (parseInt(lunchCal) >= 800) {
        lunchTaste = "~/맛있음/";
      } else {
        lunchTaste = "~/평균/";
      }
      setLunchTaste(lunchTaste);

      const dinner = data[2].DDISH_NM.replace(firstRegex, "").replace(
        secondRegex,
        "\n"
      );
      setDinnerInfo(dinner);
      const dinnerCal = data[2].CAL_INFO;
      setDinnerCalInfo(dinnerCal);

      if (parseInt(dinnerCal) >= 800) {
        dinnerTaste = "~/맛있음/";
      } else {
        dinnerTaste = "~/평균/";
      }
      setDinnerTaste(dinnerTaste);
    });
  };

  let nowUrl = window.location.pathname;

  useEffect(() => {
    getBobInfo();
  }, [nowUrl]);

  return (
    <Container>
      <GlobalFonts />
      <TodaysDate>
        {month}월 {day}일 {dayOfTheWeek}요일
      </TodaysDate>
      <div className="App">
        <div>
          <BobTime>아침</BobTime>
          <Bob>
            <BobHeader>
              <FirstCircle />
              <SecondCircle />
              <ThirdCircle />
              <CalInfo>
                {breakfastTaste}
                {breakfastCalInfo}
              </CalInfo>
            </BobHeader>
            <BobInfo>{breakfastInfo}</BobInfo>
          </Bob>
        </div>
        <div>
          <BobTime>점심</BobTime>
          <Bob>
            <BobHeader>
              <FirstCircle />
              <SecondCircle />
              <ThirdCircle />
              <CalInfo>
                {lunchTaste}
                {lunchCalInfo}
              </CalInfo>
            </BobHeader>
            <BobInfo>{lunchInfo}</BobInfo>
          </Bob>
        </div>
        <div>
          <BobTime>저녁</BobTime>
          <Bob>
            <BobHeader>
              <FirstCircle />
              <SecondCircle />
              <ThirdCircle />
              <CalInfo>
                {dinnerTaste}
                {dinnerCalInfo}
              </CalInfo>
            </BobHeader>
            <BobInfo>{dinnerInfo}</BobInfo>
          </Bob>
        </div>
      </div>
    </Container>
  );
}

export default App;
