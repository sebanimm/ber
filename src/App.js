import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MonthlyBobInfo from "./routes/MonthlyBobInfo";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/monthlyMeal/:currenMonth" element={<MonthlyBobInfo />} />
			</Routes>
		</Router>
	);
};

export default App;
