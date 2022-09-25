import React from "react";
import Container from "../styles/Container";
import MealTable from "../components/MealTable";
import GlobalFonts from "../fonts/fonts.js";

const MonthlyMealInfo = ({ year, month, KEY, firstRegex, secondRegex }) => {
	return (
		<Container>
			<GlobalFonts />
			<MealTable
				year={year}
				month={month}
				KEY={KEY}
				firstRegex={firstRegex}
				secondRegex={secondRegex}
			/>
		</Container>
	);
};

export default MonthlyMealInfo;
