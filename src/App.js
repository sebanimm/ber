import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalFonts from "./fonts/fonts";
import "./App.css";

const Container = styled.div`
  height: fit-content;
  background-color: gray;
  margin: 0;
  padding: 0;
`;

const TodaysDate = styled.h1`
  padding: 15vh 0;
  margin: 0;
  height: 10vh;
  text-align: center;
`;

const Bob = styled.div`
  width: 300px;
  height: 300px;
  background: #d8e9d8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

const BobHeader = styled.div`
  background-color: white;
  height: 30px;
  width: 300px;
  position: absolute;
  top: 0px;
  border-radius: 10px 10px 0px 0px;
`;

const FirstCircle = styled.div`
  position: absolute;
  top: 9px;
  background-color: #f05f5f;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;
`;

const SecondCircle = styled(FirstCircle)`
  background-color: #ffb800;
  margin-left: 30px;
`;

const ThirdCircle = styled(FirstCircle)`
  background-color: #8ed682;
  margin-left: 50px;
`;

const BobTime = styled.p`
  font-size: 30px;
  font-family: "nanum";
  margin-bottom: 2vh;
`;

const BobInfo = styled.div`
  display: flex;
  white-space: pre-wrap;
  line-height: 150%;
  font-size: 20px;
  font-family: "nanum";
  height: 300px;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const dayOfTheWeek = week[new Date(year, month - 1, day).getDay()];
  console.log(new Date(year, month - 1, day));
  console.log(date);
  const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;

  const [breakfastInfo, setBreakfastInfo] = useState("급식 정보가 없습니다.");
  const [lunchInfo, setLunchInfo] = useState("급식 정보가 없습니다.");
  const [dinnerInfo, setDinnerInfo] = useState("급식 정보가 없습니다.");

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
      const lunch = data[1].DDISH_NM.replace(firstRegex, "").replace(
        secondRegex,
        "\n"
      );
      setLunchInfo(lunch);
      const dinner = data[2].DDISH_NM.replace(firstRegex, "").replace(
        secondRegex,
        "\n"
      );
      setDinnerInfo(dinner);
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
            </BobHeader>
            <BobInfo>{dinnerInfo}</BobInfo>
          </Bob>
        </div>
      </div>
    </Container>
  );
}

export default App;
