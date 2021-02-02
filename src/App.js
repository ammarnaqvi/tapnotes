import { useContext } from "react";
import "./App.css";
import Structure from "./components/structure";
import { StructureContext } from "./StructureContext";

function App() {
	const { loading, error } = useContext(StructureContext);
	return (
		<div className="App">
			{loading ? <p>Loading</p> : <Structure />}
			{error && <p>{error}</p>}
		</div>
	);
}

export default App;
