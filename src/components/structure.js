import React, { useContext } from "react";
import { StructureContext } from "../StructureContext";
import Element from "./element";

const Structure = () => {
	const { structure } = useContext(StructureContext);
	return (
		<div>
			{structure
				.filter((struct) => struct.parentId == null) //render base level
				.map((elem) => (
					<Element elem={elem} />
				))}
		</div>
	);
};

export default Structure;
