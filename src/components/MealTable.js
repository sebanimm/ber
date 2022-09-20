import Container from "../styles/Container";
import styled from "styled-components";
import MealTimeMain from "../styles/MealTimeMain";
import MealInfoMain from "../styles/MealInfoMain";
import TodaysDateMain from "../styles/TodaysDateMain";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Table = styled.div`
	width: 76vw;
	min-height: 450px;
	display: flex;
	margin: 0 12vw;
	flex-wrap: wrap;
	background-color: black;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 50px;
	position: relative;
`;

const Column = styled.div`
	width: 17%;
	height: 65vh;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Box = styled.div`
	height: 30%;
`;

const MealTime = styled(MealTimeMain)`
	margin-bottom: 7%;
	font-size: 20px;
	height: 16%;
`;

const MealInfo = styled(MealInfoMain)`
	height: 77%;
	font-size: 12px;
	line-height: 120%;
	display: block;
	bottom: 0;
	position: relative;
`;

const VerticalLine = styled.div`
	border: 2px solid white;
	width: 0;
	height: 430px;
	border-radius: 5px;
	top: 50%;
	background-color: white;
`;

const HorizontalLine = styled(VerticalLine)`
	height: 0;
	width: 73vw;
	top: 50%;
	left: 50%;
	transform: translate(-41.18%);
`;

const TodaysDate = styled(TodaysDateMain)`
	padding: 0;
`;

const Days = styled.h1`
	color: black;
	display: flex;
	width: 76vw;
	justify-content: space-around;
	margin: 0 12vw;
	padding-top: 50px;
`;

const Dates = styled(Days)`
	padding-top: 0;
`;

const IncreaseBtn = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 26px;
	background-color: black;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) => (props.count === 5 ? "none" : "black")};
	border: ${(props) => (props.count === 5 ? "none" : "black")};
	pointer-events: ${(props) => (props.count === 5 ? "none" : "black")};
`;

const DecreaseBtn = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 26px;
	background-color: black;
	color: white;
	align-items: center;
	justify-content: center;
	background: ${(props) => (props.count === 1 ? "none" : "black")};
	border: ${(props) => (props.count === 1 ? "none" : "black")};
	pointer-events: ${(props) => (props.count === 1 ? "none" : "black")};
`;

const Stepper = styled.div`
	position: absolute;
	display: flex;
	width: 50px;
	height: 150px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	top: 50%;
	left: 10%;
	transform: translate(-175%, -50%);
`;

const MealTable = ({ year, month, URL }) => {
	const [count, setCount] = useState(1);

	const decreaseCount = () => {
		setCount(count - 1);
	};

	const increaseCount = () => {
		setCount(count + 1);
	};

	return (
		<Container>
			<TodaysDate>
				{year}년 {month}월 급식표
			</TodaysDate>
			<Days>
				<p>월</p>
				<p>화</p>
				<p>수</p>
				<p>목</p>
				<p>금</p>
			</Days>
			<Dates>
				<p>{month}월 일</p>
				<p>{month}월 일</p>
				<p>{month}월 일</p>
				<p>{month}월 일</p>
				<p>{month}월 일</p>
			</Dates>
			<div style={{ position: "relative" }}>
				<Stepper>
					<DecreaseBtn onClick={decreaseCount} count={count}>
						<FontAwesomeIcon icon={faArrowUp} style={{ color: "#FFF" }} />
					</DecreaseBtn>
					<p>{count}주차</p>
					<IncreaseBtn onClick={increaseCount} count={count}>
						<FontAwesomeIcon icon={faArrowDown} style={{ color: "#FFF" }} />
					</IncreaseBtn>
				</Stepper>
				<Table>
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
							<HorizontalLine />
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
					</Column>
					<VerticalLine />
					<Column>
						<Box>
							<MealTime>아침</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>점심</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
						<Box>
							<MealTime>저녁</MealTime>
							<MealInfo>
								돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
								배추김치{"\n"}햇반{"\n"}파인애플피자
							</MealInfo>
						</Box>
					</Column>
				</Table>
			</div>
		</Container>
	);
};

export default MealTable;
