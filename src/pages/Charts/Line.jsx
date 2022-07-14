import React from "react";
import { LineChart, ChartsHeader } from "../../componets";

const Line = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-4 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
			<ChartsHeader category="Line" title="Inflation Rate" />
			<div className="w-full">
				<LineChart />
			</div>
		</div>
	);
};

export default Line;
