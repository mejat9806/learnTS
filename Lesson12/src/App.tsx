// import Counter from "./component/Counter";
// import Heading from "./component/Heading";
// import List from "./component/List";
// import Section from "./component/Section";
import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
} from "react";

// }
// export default function App() {
//   const [count, setCount] = useState<number>(0); // if the state has no value put in  union type like null or undefined//you dont need to <number> because TS will infer it from the value
//   const [user, SetUser] = useState<User[]>([]);
//   return (
//     <div>
//       <Heading title="hello" />
//       <Section>
//         <div>Hello</div>
//         <Counter setCount={setCount}>
//           {" "}
//           <p>the count is {count}</p>
//         </Counter>
//         <List
//           items={["🐉 dragon", "🍣   ninja"]}
//           render={(item: string) => <span className="gold bold">{item}</span>}
//         ></List>
//       </Section>
//     </div>
//   );

interface User {
  id: number;
  username: string;
}
type fibfunc = (n: number) => number;
const fib: fibfunc = (n: number) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
const mynum: number = 37;

export default function App() {
  // if the state has no value put in  union type like null or undefined//you dont need to <number> because TS will infer it from the value
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  const add1 = useCallback(
    (): //e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    void => setCount((prev) => prev + 1),
    [],
  );
  const result = useMemo(() => fib(mynum), [mynum]);
  useEffect(() => {
    console.log("mounting");
    console.log(user);
    document.body.style.backgroundColor = "#f343";
    return () => console.log("unmount");
  }, [user]);

  return (
    <div>
      <h1>{count}</h1>
      <h2>{result}</h2>
      <button onClick={add1}>add</button>
    </div>
  );
}
