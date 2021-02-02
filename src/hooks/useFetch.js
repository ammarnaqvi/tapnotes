import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setResponse(null);
		setError(null);

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setResponse(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return [response, loading, error];
};

export default useFetch;
