import React from "react";
import Element from "./element";

const Line = ({ data }) => {
	return (
		<div>
			<div>line</div>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Line;
