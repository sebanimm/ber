import { React, useState } from "react";
import { DropdownWrapper } from "../styles/styles";

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
		<DropdownWrapper>
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
		</DropdownWrapper>
	);
};

export default Dropdown;
