import React from "react";
import { ChartsHeader, Pie as PieChart } from "../../componets";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-4 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
			<ChartsHeader category="Pie" title="Project Cost Breakdown" />
			<PieChart
				id="chart-pie"
				data={pieChartData}
				legendVisiblity
				height="full"
			/>
		</div>
	);
};

export default Pie;
