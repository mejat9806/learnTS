import { ReactNode } from "react";

type useCountState = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Counter({ setCount, children }: useCountState) {
  // const [count, setCount] = useState<number>(0); // if the state has no value put in  union type like null or undefined//you dont need to <number> because TS will infer it from the value
  return (
    <div style={{ display: "flex" }}>
      <main>
        <h1>{children}</h1>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
        </div>
      </main>
    </div>
  );
}

export default Counter;
