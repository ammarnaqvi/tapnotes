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

	const want = elem.original?.want;

	const active = structure
		.filter((struct) => struct.type === "text")
		.map((struct) => struct.original.id);

	return (
		<div className="my-4">
			{elem.type === "section" && (
				<Section data={data} name={name} want={want} active={active} />
			)}
			{elem.type === "folder" && (
				<Folder data={data} name={name} want={want} active={active} />
			)}
			{elem.type === "line" && <Line data={data} />}
			{elem.type === "text" && <Text name={name} />}
		</div>
	);
};

export default Element;
