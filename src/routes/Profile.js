import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "../styles/Profile.css";
import GlobalFonts from "../fonts/fonts.js";
import Container from "../styles/Container";
import VerticalLine from "../styles/VerticalLine";

const User = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const UserProfile = styled.div`
	height: 210px;
	min-width: 1000px;
	background: #98adc7;
	box-shadow: 3px 4px 8px 3px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-family: "GothicA1-Regular";
`;

const ProfileEditBtn = styled.div`
	width: 85px;
	height: 35px;
	border: 2px solid black;
	border-radius: 20px;
	margin: 0 3% 0 auto;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	font-family: "GothicA1-Light";
`;

const Posts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 500px);
	min-width: 1000px;
	flex-direction: column;
`;

const Wrapper = styled.div`
	padding-top: 20px;
	max-width: 1000px;
	margin: 0 auto;
`;

const PostStatus = styled.div`
	font-size: 34px;
	text-align: center;
	color: #505050;
	width: fit-content;
	margin: 0 auto;
	font-family: "GothicA1-Light";
`;

const SortingBtn = styled(ProfileEditBtn)`
	width: 100px;
	margin-top: 30px;
	margin-bottom: 20px;
	font-size: 14px;
`;

const Users = styled.div`
	width: 55%;
	display: flex;
`;

const UserInterest = styled.div`
	width: 33%;
	display: flex;
	flex-direction: column;
`;

const UserWrapper = styled.div`
	display: flex;
	height: 80%;
	width: 100%;
	justify-content: space-evenly;
`;

const UserImageWrapper = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserImage = styled.div`
	width: 140px;
	height: 140px;
	background-color: #d9d9d9;
	border-radius: 50%;
`;

const UserInfoWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StatusMessage = styled.div`
	height: 50%;
	width: 100%;
	background-color: white;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #676767;
	position: relative;
	z-index: 1;
	filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
	::after {
		content: "";
		position: absolute;
		left: 10px;
		top: 70%;
		width: 0;
		height: 0;
		border: 24px solid transparent;
		border-right-color: white;
		border-left: 0;
		border-bottom: 0;
		margin-top: -12px;
		margin-left: -24px;
		transform: rotate(-10deg);
	}
`;

const UserInfo = styled.div`
	height: 30%;
	width: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
`;

const UserName = styled.div`
	max-width: 30%;
	height: 100%;
	font-size: 24px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserId = styled(UserName)`
	max-width: 40%;
	width: 40%;
	height: 90%;
	border-radius: 50px;
	font-size: 14px;
	color: black;
	background-color: white;
	margin-left: 5%;
	margin-right: 5%;
`;

const Icon = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;

const Ment = styled.div`
	height: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 18px;
`;

const Interests = styled.div`
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #565656;
`;

const Image = styled.div`
	height: 100%;
	width: 12%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Interest = styled.div``;

const Profile = () => {
	const { userName } = useParams();

	return (
		<Container>
			<GlobalFonts />
			<Wrapper>
				<User>
					<div style={{ minWidth: "1000px" }}>
						<ProfileEditBtn>프로필 편집</ProfileEditBtn>
					</div>
					<div style={{ marginBottom: "10px" }} />
					<UserProfile>
						<UserWrapper>
							<Users>
								<UserImageWrapper>
									<UserImage />
								</UserImageWrapper>
								<UserInfoWrapper>
									<div style={{ marginBottom: "8%" }} />
									<UserInfo>
										<UserName>{userName}</UserName>
										<UserId>1학년 4반 14번</UserId>
										<Image>
											<img src="/github.png" alt="github" />
										</Image>
										<Image>
											<img src="/email.png" alt="email" />
										</Image>
									</UserInfo>
									<div style={{ marginBottom: "5%" }} />
									<StatusMessage>상태메세지를 입력해주세요!</StatusMessage>
									<div style={{ marginBottom: "7%" }} />
								</UserInfoWrapper>
							</Users>
							<VerticalLine
								style={{
									border: "1.2px solid #e0e0e0",
									backgroundColor: "#E0E0E0",
									height: "100%",
								}}
							/>
							<UserInterest>
								<div style={{ marginBottom: "8%" }} />
								<Ment>
									<b>{userName}</b>님은 이런 것들에 관심이 있어요!
								</Ment>
								<div style={{ marginBottom: "5%" }} />
								<Interests>나를 표현할 멋진 태그를 설정해보세요.</Interests>
								<div style={{ marginBottom: "7%" }} />
							</UserInterest>
						</UserWrapper>
					</UserProfile>
				</User>
				<div style={{ minWidth: "1000px" }}>
					<SortingBtn>
						<Icon>
							<FontAwesomeIcon
								icon={faPlay}
								style={{ fontSize: "10px", transform: "rotate(270deg)" }}
							/>
							<FontAwesomeIcon
								icon={faPlay}
								style={{ fontSize: "10px", transform: "rotate(90deg)" }}
							/>
						</Icon>
						좋아요순
					</SortingBtn>
				</div>
				<Posts>
					<PostStatus>
						<p>게시글이 없네요.</p>
						<p>친구들과 멋진 글을 공유해보세요!</p>
					</PostStatus>
				</Posts>
			</Wrapper>
		</Container>
	);
};

export default Profile;
