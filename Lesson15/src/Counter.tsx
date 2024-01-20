import { ChangeEvent, ReactNode, useReducer } from "react";
import { CounterProvider, initialState } from "./context/useContext";

import { useCounter } from "./context/useContext";
import { useCounterText } from "./context/useContext";
type ChildrenType = {
  children: (num: number) => ReactNode;
};
const Counter = ({ children }: ChildrenType) => {
  //  const [count, setCount] = useState<number>(1);
  const { count, increment, decrement } = useCounter();
  const { input, handleInput } = useCounterText();
  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" name="" id="" onChange={handleInput} />
        <h1>{input}</h1>
      </div>
    </>
  );
};
export default Counter;
