import { useContext } from "react";
import "./App.css";
import Structure from "./components/structure";
import { StructureContext } from "./StructureContext";

function App() {
	const { loading, error } = useContext(StructureContext);
	return (
		<div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
			{loading ? <p>Loading</p> : <Structure />}
			{error && <p>{error}</p>}
		</div>
	);
}

export default App;
