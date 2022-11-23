import { React, useState } from "react";
import styled from "styled-components";

const D = styled.div`
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

const Dropdown = ({ classInfo, getSelected }) => {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState(classInfo);

	const sendSelected = (option) => {
		const grade = option[0];
		const className = option[2];
		getSelected(grade, className);
	};

	const options = [
		"1-1",
		"1-2",
		"1-3",
		"1-4",
		"2-1",
		"2-2",
		"2-3",
		"2-4",
		// "3-1",
		// "3-2",
		// "3-3",
		// "3-4",
	];

	return (
		<D>
			<div className="dropdown">
				<div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
					{selected}
				</div>
				{isActive && (
					<div className="dropdown-content">
						{options.map((option, index) => (
							<div
								key={index}
								onClick={() => {
									sendSelected(option);
									setIsActive(false);
									setSelected(option);
								}}
								className="dropdown-item"
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
		</D>
	);
};

export default Dropdown;
