import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Edit,
	Inject,
	Toolbar,
	Selection,
	Sort,
	Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../componets";

const Customers = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="page" title="Customers" />

			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{ allowDeleting: true, allowEditing: true }}
				width="auto"
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Toolbar, Edit, Selection, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
