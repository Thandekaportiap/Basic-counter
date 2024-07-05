import Heading from "./components/heading";
import Counter from "./components/counter";
import Increment from "./components/increment";
import Decrement from "./components/decrement";
import { useState } from "react";

function App() {

const [counter, setCounter] = useState(0)
let num = 26
console.log("This is a counter value:", counter)
console.log("This is the num value:", num)

  return (
    <div
      id="main"
      style={{
        border: "solid 1px blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <section>
        <Heading />
      </section>
      <section>
        <Counter setCounter={setCounter} counter={counter}/>
      </section>
      <section>
        <Increment setCounter={setCounter} counter={counter} />
        <Decrement setCounter={setCounter}  counter={counter}/>
      </section>
    </div>
  );
}

export default App;
