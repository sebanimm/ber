import styled from "styled-components";

export const DropdownWrapper = styled.div`
	.dropdown {
		width: 100px;
		height: 40px;
		margin-top: 60px;
	}

	.dropdown .dropdown-btn {
		border-radius: 10px;
		background: #6d839e;
		height: 100%;
		border: 1px solid #6d839e;
		cursor: pointer;
	}

	.dropdown-btn,
	.dropdown-content {
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-family: "Ultra";
		border-radius: 10px;
	}

	.dropdown .dropdown-content {
		position: absolute;
		background: #6d839e;
		flex-direction: column;
		width: 100px;
		z-index: 0;
	}

	.dropdown .dropdown-content .dropdown-item {
		width: 100%;
		padding: 10px 0;
		cursor: pointer;
		transition: all 0.2s;
		text-align: center;
		border-radius: 10px;
	}

	.dropdown .dropdown-content .dropdown-item:hover {
		background: #98adc7;
	}
`;

export const ClassesTable = styled.div`
	padding: 15px;
	width: 640px;
	height: 470px;
	background-color: #98adc7;
	border-radius: 20px;
	margin-top: 20px;
	display: flex;
	justify-content: space-evenly;

	.v {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Classes = styled.div`
	width: 100px;
	height: 40px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	text-align: center;
	white-space: pre-wrap;
	font-family: "GothicA1-Light";
	margin: 6.1px;
`;

export const AfterClasses = styled(Classes)`
	background: #d1d1d1;
`;

export const TimetableWrapper = styled.div`
	width: 1000px;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;

	.z {
		height: 100vh;
		width: 100px;
		color: white;
	}

	.a {
		display: flex;
	}

	.s {
		margin-top: auto;
		padding: 15px 0;
		height: 470px;
		width: 100px;
		display: flex;
		flex-direction: column;
		font-size: 24px;
		bottom: 0;
		color: rgb(31, 61, 96);

		p {
			margin: auto 0;
			font-family: "Ultra";
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.g {
		width: 85px;
		text-align: center;
	}
`;
