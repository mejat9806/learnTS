import { ReactNode } from "react";

type counterProp = {
  setCount: React.Dispatch<React.SetStateAction<number>>; //
  children: ReactNode;
};
function Counter({ setCount, children }: counterProp) {
  //   const [count, setCount] = useState<number>(0); // if the state has no value put in  union type like null or undefined//you dont need to <number> because TS will infer it from the value
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {/*   <p>the count is {count}</p> */}
      {children}
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;
