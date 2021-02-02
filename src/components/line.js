import React from "react";
import Element from "./element";

const Line = ({ data }) => {
	return (
		<div className="bg-white px-6 py-1">
			{data.map((elem) => (
				<Element elem={elem} />
			))}
		</div>
	);
};

export default Line;
