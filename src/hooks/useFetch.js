import { useEffect, useState } from "react";

const useFetch = (url, body, method = "GET") => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setResponse(null);
		setError(null);

		const fetchData = async () => {
			try {
				const response =
					method === "GET"
						? await fetch(url)
						: await fetch(url, {
								method: method,
								body: JSON.stringify(body),
						  });
				const data = await response.json();
				setResponse(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, method]);

	return [response, loading, error];
};

export default useFetch;
