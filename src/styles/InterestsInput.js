import styled from "styled-components";
import GithubInput from "./GithubInput";

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

export default InterestInput;
