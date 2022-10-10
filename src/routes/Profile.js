import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import VerticalLine from "../styles/VerticalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

const User = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const UserProfile = styled.div`
	height: 210px;
	background: #98adc7;
	box-shadow: 3px 4px 8px 3px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
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
`;

const Posts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 500px);
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

const Interests = styled.div`
	width: 30%;
`;

const UserWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 80%;
	justify-content: space-evenly;
`;

const UserImage = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.div`
	width: 140px;
	height: 140px;
	background-color: #d9d9d9;
	border-radius: 50%;
`;

const UserUser = styled.div`
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

const UserId = styled.div`
	width: 30%;
	height: 100%;
	font-size: 24px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserName = styled(UserId)`
	width: 40%;
	height: 90%;
	border-radius: 50px;
	font-size: 14px;
	color: black;
	background-color: white;
	margin-left: 5%;
`;

const Profile = () => {
	return (
		<Container>
			<Wrapper>
				<User>
					<ProfileEditBtn>프로필 편집</ProfileEditBtn>
					<div style={{ marginBottom: "10px" }} />
					<UserProfile>
						<UserWrapper>
							<Users>
								<UserImage>
									<Image />
								</UserImage>
								<UserUser>
									<div style={{ marginBottom: "8%" }} />
									<UserInfo>
										<UserId>이하린</UserId>
										<UserName>1학년 4반 14번</UserName>
									</UserInfo>
									<div style={{ marginBottom: "5%" }} />
									<StatusMessage>상태메세지를 입력해주세요!</StatusMessage>

									<div style={{ marginBottom: "9%" }} />
								</UserUser>
							</Users>
							<VerticalLine style={{ color: "white", height: "100%" }} />
							<Interests />
						</UserWrapper>
					</UserProfile>
				</User>
				<SortingBtn>
					<FontAwesomeIcon
						icon={faUpDown}
						style={{ marginRight: "5px", fontSize: "20px" }}
					/>
					좋아요순
				</SortingBtn>
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
