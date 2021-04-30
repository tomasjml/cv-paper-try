import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Tomas Molina";
  }, []);

  return (
    <div className="App">
      <div className="paper">
        <h1>Tomas Molina</h1>
        <h2>System and Software Engineer</h2>
      </div>
    </div>
  );
}
