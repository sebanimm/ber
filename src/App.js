import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  background-color: gray;
  margin: 0;
  padding: 0;
`;

const TodaysDate = styled.h1`
  margin: 0;
  height: 10vh;
  text-align: center;
`;

const BssmBob = styled.div`
  width: 300px;
  height: 270px;
  background: #ecfae7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 10px 10px;
  position: relative;
  text-align: center;
`;

const BobHeader = styled.div`
  background-color: white;
  height: 30px;
  width: 300px;
  position: absolute;
  top: -30px;
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

function App() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const currentDate = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
  const [breakfastInfo, setBreakfastInfo] = useState([]);
  const [lunchInfo, setLunchInfo] = useState([]);
  const [dinnerInfo, setDinnerInfo] = useState([]);

  const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${currentDate}`;
  const getBreakfastInfo = () => {
    axios.get(URL).then((res) => {
      const breakfast =
        res.data.mealServiceDietInfo[1].row[0].DDISH_NM.replaceAll("<br/>", "");
      setBreakfastInfo(breakfast);
    });
  };
  const getLunchInfo = () => {
    axios.get(URL).then((res) => {
      const lunch = res.data.mealServiceDietInfo[1].row[1].DDISH_NM.replaceAll(
        "<br/>",
        ""
      );
      setLunchInfo(lunch);
    });
  };
  const getDinnerInfo = () => {
    axios.get(URL).then((res) => {
      const dinner = res.data.mealServiceDietInfo[1].row[2].DDISH_NM.replaceAll(
        "<br/>",
        ""
      );
      setDinnerInfo(dinner);
    });
  };

  let nowUrl = window.location.pathname;

  useEffect(() => {
    getBreakfastInfo();
    getLunchInfo();
    getDinnerInfo();
  }, [nowUrl]);

  return (
    <Container>
      <TodaysDate>
        {month}월 {day}일
      </TodaysDate>
      <div className="App">
        <BssmBob>
          <BobHeader>
            <FirstCircle />
            <SecondCircle />
            <ThirdCircle />
          </BobHeader>
          {breakfastInfo}
        </BssmBob>
        <BssmBob>
          <BobHeader>
            <FirstCircle />
            <SecondCircle />
            <ThirdCircle />
          </BobHeader>
          {lunchInfo}
        </BssmBob>
        <BssmBob>
          <BobHeader>
            <FirstCircle />
            <SecondCircle />
            <ThirdCircle />
          </BobHeader>
          {dinnerInfo}
        </BssmBob>
      </div>
    </Container>
  );
}

export default App;
