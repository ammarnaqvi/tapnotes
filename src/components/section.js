import React from "react";
import baseUrl from "../baseUrl";
import useFetch from "../hooks/useFetch";
import Element from "./element";

const Section = ({ data, name, want, active }) => {
	const [response, loading, error] = useFetch(
		`${baseUrl}/get-suggestions`,
		{
			want: want,
			active: active,
		},
		"POST"
	);

	return (
		<div className="bg-gray-200 p-8">
			<h1 className="text-2xl text-gray-900 font-bold">{name}</h1>
			<div>
				{data.map((elem) => (
					<Element elem={elem} />
				))}
			</div>
		</div>
	);
};

export default Section;
