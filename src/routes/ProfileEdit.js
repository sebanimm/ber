import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";
import HorizontalLine from "../styles/HorizontalLine";
import GlobalFonts from "../fonts/fonts.js";

const EditWrapper = styled.div`
	margin: auto;
	width: 1000px;
	height: 600px;
	background-color: #d6dee9;
	border-radius: 40px;
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const UserProfile = styled.div`
	height: 20%;
	width: 90%;
	display: flex;
`;

const Edit = styled.div`
	height: 55%;
	width: 85%;
`;

const EditApplyBtn = styled.button`
	width: 120px;
	height: 50px;
	border-radius: 30px;
	background-color: #98adc7;
	color: white;
	border: #98adc7;
	font-size: 16px;
`;

const UserImage = styled.div`
	height: 120px;
	width: 120px;
	background-color: #d9d9d9;
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
	justify-content: left;
	align-items: center;
	font-family: "GothicA1-Light";
	font-weight: bolder;
`;

const UserId = styled.div`
	height: 44%;
	margin-bottom: 6%;
`;

const ProfileEdit = () => {
	const { userName } = useParams();

	return (
		<Container>
			<GlobalFonts />
			<EditWrapper>
				<UserProfile>
					<UserImageWrapper>
						<UserImage />
					</UserImageWrapper>
					<UserInfo>
						<UserName>{userName}</UserName>
						<UserId></UserId>
					</UserInfo>
				</UserProfile>
				<HorizontalLine style={{ transform: "translate(0%)" }} />
				<Edit></Edit>
				<EditApplyBtn>적용하기</EditApplyBtn>
			</EditWrapper>
		</Container>
	);
};

export default ProfileEdit;
