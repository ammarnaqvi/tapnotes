import React, { createContext } from "react";
import baseUrl from "./baseUrl";
import useFetch from "./hooks/useFetch";

export const StructureContext = createContext();

export const StructureProvider = ({ children }) => {
	const [response, loading, error] = useFetch(`${baseUrl}/get-structure`);
	const structure =
		(response && response.data && response.data.structure) || [];

	return (
		<StructureContext.Provider value={{ structure, loading, error }}>
			{children}
		</StructureContext.Provider>
	);
};
