import React from "react";
import Container from "../styles/Container";
import BobTable from "../components/BobTable";
import GlobalFonts from "../fonts/fonts.js";

const MonthlyBobInfo = () => {
	const date = new Date();
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const currentMonth = `${year}${month.padStart(2, "0")}`;

	return (
		<Container>
			<GlobalFonts />
			<BobTable year={year} month={month} currentMonth={currentMonth} />
		</Container>
	);
};

export default MonthlyBobInfo;
