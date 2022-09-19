import React from "react";
import Container from "../styles/Container";
import MealTable from "../components/MealTable";
import GlobalFonts from "../fonts/fonts.js";

const MonthlyMealInfo = ({ year, month, currentMonth }) => {
	return (
		<Container>
			<GlobalFonts />
			<MealTable year={year} month={month} currentMonth={currentMonth} />
		</Container>
	);
};

export default MonthlyMealInfo;
