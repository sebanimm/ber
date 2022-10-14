import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";
import HorizontalLine from "../styles/HorizontalLine";
import GlobalFonts from "../fonts/fonts.js";
import "../styles/Profile.css";

const EditWrapper = styled.div`
	margin: 0 auto;
	width: 1000px;
	height: 620px;
	background-color: #d6dee9;
	border-radius: 40px;
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	font-family: "GothicA1-Light";
`;

const UserProfile = styled.div`
	height: 20%;
	width: 90%;
	display: flex;
`;

const Edits = styled.div`
	height: 50%;
	width: 80%;
	display: flex;
`;

const EditApplyBtn = styled.button`
	width: 120px;
	height: 50px;
	border-radius: 30px;
	background-color: #98adc7;
	color: white;
	border: #98adc7;
	font-size: 16px;
	font-family: "GothicA1-Light";
	cursor: pointer;
	margin-bottom: 10px;
`;

const UserImage = styled.div`
	position: relative;
	height: 120px;
	width: 120px;
	background-color: #c7c7c7;
	border-radius: 50%;
`;

const UserImageWrapper = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
`;

const UserInfo = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
`;

const UserName = styled.div`
	height: 44%;
	margin-top: 6%;
	font-size: 30px;
	display: flex;
	align-items: center;
	font-family: "GothicA1-Light";
	font-weight: bolder;
	padding-left: 10%;
`;

const UserId = styled.div`
	height: 44%;
	margin-bottom: 6%;
	background-color: #98adc7;
	border-radius: 30px;
	font-family: "GothicA1-Light";
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

const ProfileImgEditBtn = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 0;
	content: url("/edit-button.svg");
	cursor: pointer;
`;

const Edit = styled.div`
	width: 46%;
	display: flex;
	flex-direction: column;
`;

const InterestsEdit = styled(Edit)``;

const StatusMessageEdit = styled.div`
	width: 100%;
	height: 40%;
	margin-top: 5%;
	color: black;
	display: flex;
	flex-direction: column;
`;

const InfoEdit = styled(StatusMessageEdit)`
	height: 50%;
`;

const Head = styled.div`
	margin-left: 5%;
	height: 25px;
	font-size: 20px;
	display: flex;
	align-items: center;
	font-family: "GothicA1-Regular";
	margin-bottom: 10px;
	img {
		margin-right: 2%;
	}
`;

const StatusMessageInput = styled.div`
	height: calc(100% - 35px);
	background-color: #f0f0f0;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GithubInput = styled(StatusMessageInput)`
	height: 35%;
	justify-content: space-evenly;
`;

const EmailInput = styled(GithubInput)`
	margin-top: calc(10% - 25px);
`;

const InterestInput = styled(GithubInput)`
	position: relative;
	height: 18%;
	justify-content: space-evenly;
	margin-bottom: 4%;
	input {
		width: 70%;
		margin-left: 8%;
	}
	img {
		cursor: pointer;
	}
`;

const InterestsList = styled.div`
	background-color: #f0f0f0;
	border-radius: 30px;
	height: 47%;
	width: 90%;
	padding: 5% 5%;
	display: flex;
	justify-content: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;
`;

const InterestsItem = styled.div`
	height: 22%;
	width: fit-content;
	padding-left: 4%;
	padding-right: 4%;
	margin: 0 5px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: #98adc7;
	border-radius: 30px;
`;

const ProfileEdit = () => {
	const { userName } = useParams();

	return (
		<Container>
			<GlobalFonts />
			<div style={{ paddingTop: "30px" }}>
				<EditWrapper>
					<UserProfile>
						<UserImageWrapper>
							<UserImage>
								<ProfileImgEditBtn />
							</UserImage>
						</UserImageWrapper>
						<UserInfo>
							<UserName>{userName}</UserName>
							<UserId>
								<img src="/cap.svg" alt="cap" />
								1학년 4반 14번
							</UserId>
						</UserInfo>
					</UserProfile>
					<HorizontalLine style={{ transform: "translate(0%)" }} />
					<Edits>
						<Edit>
							<StatusMessageEdit>
								<Head>
									<img src="/message.svg" alt="message" />
									상태메세지
								</Head>
								<StatusMessageInput>
									<input
										type="text"
										placeholder="나를 표현할 멋진 문장을 적어보세요."
										maxLength={30}
									/>
								</StatusMessageInput>
							</StatusMessageEdit>
							<InfoEdit>
								<Head>내 정보</Head>
								<GithubInput>
									<img src="/github.svg" alt="github" />
									<input
										type="url"
										id="url"
										placeholder="깃허브 링크를 입력해주세요."
									/>
								</GithubInput>
								<EmailInput>
									<img src="/email.svg" alt="email" />
									<input
										type="email"
										id="email"
										placeholder="이메일 주소를 입력해주세요."
									/>
								</EmailInput>
							</InfoEdit>
						</Edit>
						<div style={{ marginRight: "8%" }} />
						<InterestsEdit>
							<div style={{ marginTop: "5%" }} />
							<Head>
								<img src="/face.svg" alt="face" />
								이런 것들에 관심 있어요!
							</Head>
							<InterestInput>
								<input
									type="text"
									placeholder="내 관심사를 입력해보세요!"
									maxLength="8"
									style={{ fontSize: "16px" }}
								/>
								<img src="/check.svg" alt="check" />
							</InterestInput>
							<InterestsList>
								<InterestsItem>하하</InterestsItem>
								<InterestsItem>프론트엔드</InterestsItem>
								<InterestsItem>백엔드</InterestsItem>
								<InterestsItem>하하하</InterestsItem>
								<InterestsItem>하하하</InterestsItem>
							</InterestsList>
						</InterestsEdit>
					</Edits>
					<EditApplyBtn>적용하기</EditApplyBtn>
				</EditWrapper>
			</div>
		</Container>
	);
};

export default ProfileEdit;
