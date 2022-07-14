import React from "react";
import { ChartsHeader } from "../../componets";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
	areaCustomSeries,
	areaPrimaryXAxis,
	areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
const Area = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-4 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
			<ChartsHeader category="Area" title="Inflation Rate in percentage" />
			<ChartComponent
				id="line-chart"
				height="420px"
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
			>
				<Inject services={[SplineAreaSeries, DateTime, Legend]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Area;
