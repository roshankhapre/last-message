import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LastMessage from "./components/LastMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LastMessage />
    </>
  );
}

export default App;
