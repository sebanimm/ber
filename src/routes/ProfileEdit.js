import React from "react";
import { useParams } from "react-router-dom";
import Container from "../styles/Container";
import HorizontalLine from "../styles/HorizontalLine";
import GlobalFonts from "../fonts/fonts.js";
import "../styles/Profile.css";
import EditWrapper from "../styles/EditWrapper";
import UserProfile from "../styles/UserProfile";
import Edits from "../styles/Edits";
import EditApplyBtn from "../styles/EditApplyBtn";
import UserImage from "../styles/UserImage";
import UserImageWrapper from "../styles/UserImageWrapper";
import UserInfo from "../styles/UserInfo";
import UserName from "../styles/UserName";
import UserId from "../styles/UserId";
import ProfileImgEditBtn from "../styles/ProfileImgEditBtn";
import Edit from "../styles/Edit";
import StatusMessageEdit from "../styles/StatusMessageEdit";
import Head from "../styles/Head";
import StatusMessageInput from "../styles/StatusMessageInput";
import InterestsList from "../styles/InterestsList";
import InterestsItem from "../styles/InterestsItem";
import InfoEdit from "../styles/InfoEdit";
import GithubInput from "../styles/GithubInput";
import EmailInput from "../styles/EmailInput";
import InterestInput from "../styles/InterestsInput";

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
						<Edit>
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
						</Edit>
					</Edits>
					<EditApplyBtn>적용하기</EditApplyBtn>
				</EditWrapper>
			</div>
		</Container>
	);
};

export default ProfileEdit;
