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
		padding: 10px 0;
		width: 100%;
		cursor: pointer;
		transition: all 0.2s;
		text-align: center;
		border-radius: 10px;
	}

	.dropdown .dropdown-content .dropdown-item:hover {
		background: #98adc7;
	}
`;

const Dropdown = ({ selected, setSelected }) => {
	const [isActive, setIsActive] = useState(false);
	const options = ["1-1", "1-2", "1-3", "1-4"];
	return (
		<D>
			<div className="dropdown">
				<div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
					{selected}
				</div>
				{isActive && (
					<div className="dropdown-content">
						{options.map((option) => (
							<div
								onClick={(e) => {
									setSelected(option);
									setIsActive(false);
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
