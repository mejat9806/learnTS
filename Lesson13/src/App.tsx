import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type User = {
  id: number;
  username: string;
};

function App() {
  //const [count, setCount] = useState<number>(0);
  const [count, setCount] = useState<number>(0); //this is suitable for waiting for data from the server or the data start as null and we are waiting for the data
  const [user, setUser] = useState<User[] | null>(null); //this is suitable for waiting for data from the server or the data start as null and we are waiting for the data

  //!useEffect
  useEffect(() => {
    console.log("Mounting");
    console.log("user: ", user);
    return () => {
      console.log("unmmounting");
    };
  }, [user]);

  //!useCallback
  const exampleUsecallback = useCallback(function () {
    setCount((prev) => prev + 1);
  }, []);

  const AddTwo = useCallback(() => {
    setCount((prev) => prev + 2);
  }, []);
  const AddTwoEvent = useCallback(
    (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>, //this 2 union make sure only mouse and keyboard events are register
    ): void => {
      setCount((prev) => prev + 2);
      console.log(e);
    },
    [],
  );

  //!useMemo
  type fibFunc = (n: number) => number;

  const fib: fibFunc = useCallback((n: number): number => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fib2: fibFunc = useCallback(function (n: number) {
    if (n < 2) return n;
    return fib2(n - 1) + fib2(n - 2);
  }, []);

  const myNume: number = 20;
  const fb1 = useMemo<number>(() => fib(myNume), [fib]);
  const fb2 = useMemo<number>(() => fib2(myNume), [fib2]);

  //!useref
  const inputref = useRef<HTMLInputElement>(null);
  console.log(inputref?.current);
  console.log(inputref?.current?.value);
  return (
    <div>
      <h1>{count}</h1>
      <h2>
        {fb1},{fb2}
      </h2>
      <button onClick={exampleUsecallback}>Add 1</button>
      <button onClick={AddTwo}>Add 2</button>
      <button onClick={(e) => AddTwoEvent(e)}>Add 2 event</button>
      <input
        type="text"
        name="inputTest"
        id="inputtest"
        ref={inputref}
        //  onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
