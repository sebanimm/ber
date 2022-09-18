import React from "react";
import Container from "../styles/Container";
import styled from "styled-components";
import BobTimeMain from "../styles/BobTimeMain";
import BobInfoMain from "../styles/BobInfoMain";
import TodaysDateMain from "../styles/TodaysDateMain";

const Table = styled.div`
	width: 76vw;
	min-height: 65vh;
	display: flex;
	margin: 0 12vw;
	flex-wrap: wrap;
	background-color: black;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 50px;
	position: relative;
	top: 10vh;
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

const BobTime = styled(BobTimeMain)`
	margin-bottom: 7%;
	font-size: 28px;
	height: 16%;
`;

const BobInfo = styled(BobInfoMain)`
	height: 77%;
	font-size: 14px;
	line-height: 140%;
	display: block;
	bottom: 0;
`;

const VerticalLine = styled.div`
	border: 2px solid white;
	border-radius: 5px;
	height: 62vh;
	top: 50%;
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
	top: 11vh;
	position: absolute;
	color: black;
	display: flex;
	width: 76vw;
	justify-content: space-around;
	margin: 0 12vw;
`;

const Dates = styled(Days)`
	top: 15vh;
`;

const BobTable = ({ year, month, currentMonth }) => {
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
			<Table>
				<Column>
					<Box>
						<BobTime>아침</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>점심</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>저녁</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
				</Column>
				<VerticalLine />
				<Column>
					<Box>
						<BobTime>아침</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>점심</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>저녁</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
				</Column>
				<VerticalLine />
				<Column>
					<Box>
						<BobTime>아침</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
						<HorizontalLine />
					</Box>
					<Box>
						<BobTime>점심</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
						<HorizontalLine />
					</Box>
					<Box>
						<BobTime>저녁</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
				</Column>
				<VerticalLine />
				<Column>
					<Box>
						<BobTime>아침</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>점심</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>저녁</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
				</Column>
				<VerticalLine />
				<Column>
					<Box>
						<BobTime>아침</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>점심</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
					<Box>
						<BobTime>저녁</BobTime>
						<BobInfo>
							돼지국밥{"\n"}밀면{"\n"}멸치볶음{"\n"}된장찌개{"\n"}
							배추김치{"\n"}햇반{"\n"}파인애플피자
						</BobInfo>
					</Box>
				</Column>
			</Table>
		</Container>
	);
};

export default BobTable;
