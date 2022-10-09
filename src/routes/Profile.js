import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

const User = styled.div`
	width: 1000px;
	height: 320px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const UserProfile = styled.div`
	width: 100%;
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
	margin-left: auto;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 3%;
`;

const Profile = () => {
	return (
		<Container>
			<User>
				<ProfileEditBtn>프로필 편집</ProfileEditBtn>
				<UserProfile></UserProfile>
			</User>
		</Container>
	);
};

export default Profile;
