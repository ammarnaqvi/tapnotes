import React from "react";
import Element from "./element";

const Section = ({ data, name }) => {
	return (
		<div className="bg-gray-400 p-8">
			<h1 className="text-3xl font-bold">{name}</h1>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Section;
