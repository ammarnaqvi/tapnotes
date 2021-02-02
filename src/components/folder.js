import React from "react";
import baseUrl from "../baseUrl";
import useFetch from "../hooks/useFetch";
import Element from "./element";

const Folder = ({ data, name, want, active }) => {
	const [response, loading, error] = useFetch(
		`${baseUrl}/get-suggestions`,
		{
			want: want,
			active: active,
		},
		"POST"
	);

	return (
		<div className="bg-gray-300 p-2">
			<div className="font-semibold text-gray-900">{name}</div>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Folder;
