import React, { useContext } from "react";
import { StructureContext } from "../StructureContext";
import Folder from "./folder";
import Line from "./line";
import Section from "./section";
import Text from "./text";

const Element = ({ elem }) => {
	const { structure } = useContext(StructureContext);

	const data = elem.data.map((id) =>
		structure.find((struct) => struct.id === id)
	);

	const name = elem.properties?.name;

	return (
		<div className="my-4">
			{elem.type === "section" && <Section data={data} name={name} />}
			{elem.type === "line" && <Line data={data} />}
			{elem.type === "folder" && <Folder data={data} name={name} />}
			{elem.type === "text" && <Text name={name} />}
		</div>
	);
};

export default Element;
