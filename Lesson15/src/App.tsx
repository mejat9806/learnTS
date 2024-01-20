import Counter from "./Counter";
import { CounterProvider } from "./context/useContext";

function App() {
  return (
    <>
      <CounterProvider count={0} input={""}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
