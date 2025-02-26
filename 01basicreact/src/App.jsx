import { useState } from "react";
import Chai from "./chai"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chai/>
      <h1>Chai aur react | Learned about react file structure and how react files sync with each other under the hood</h1>
    </>
  );
}

export default App;
