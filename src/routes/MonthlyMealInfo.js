import React from "react";
import Container from "../styles/Container";
import MealTable from "../components/MealTable";
import GlobalFonts from "../fonts/fonts.js";

const MonthlyMealInfo = ({ year, month, URL }) => {
	return (
		<Container>
			<GlobalFonts />
			<MealTable year={year} month={month} URL={URL} />
		</Container>
	);
};

export default MonthlyMealInfo;
