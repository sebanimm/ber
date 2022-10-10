import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

const User = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const UserProfile = styled.div`
	height: 250px;
	background: #98adc7;
	box-shadow: 3px 4px 8px 3px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
`;

const ProfileEditBtn = styled.div`
	width: 85px;
	height: 35px;
	border: 1px solid black;
	border-radius: 20px;
	margin: 0 3% 0 auto;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Posts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 500px);
	flex-direction: column;
`;

const Wrapper = styled.div`
	padding-top: 30px;
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
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Profile = () => {
	return (
		<Container>
			<Wrapper>
				<User>
					<ProfileEditBtn>프로필 편집</ProfileEditBtn>
					<div style={{ marginBottom: "30px" }} />
					<UserProfile></UserProfile>
				</User>
				<SortingBtn>좋아요순</SortingBtn>
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
