import React from "react";
import Element from "./element";

const Folder = ({ data, name }) => {
	return (
		<div className="bg-gray-500 p-2">
			<div>{name}</div>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Folder;
