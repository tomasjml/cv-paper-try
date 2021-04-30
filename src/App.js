import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "CV Paper Try";
  }, []);

  return (
    <div className="App">
      <div className="paper">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
