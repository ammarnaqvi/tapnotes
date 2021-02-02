import React from "react";
import Element from "./element";

const Section = ({ data, name }) => {
	return (
		<div>
			<div>{name}</div>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Section;
