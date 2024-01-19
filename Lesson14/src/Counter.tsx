import { ChangeEvent, ReactNode, useReducer } from "react";

const initialState = {
  count: 0,
  input: "",
};

const REDUCER_ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  PAYLOAD: "PAYLOAD",
};
type ReducerAction = {
  type:
    | typeof REDUCER_ACTION_TYPE.INCREMENT
    | typeof REDUCER_ACTION_TYPE.DECREMENT;
  payload?: typeof REDUCER_ACTION_TYPE.PAYLOAD;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.PAYLOAD:
      return { ...state, input: action.payload ?? "" };
    default:
      throw new Error(`Invalid action`);
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};
const Counter = ({ children }: ChildrenType) => {
  //  const [count, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.PAYLOAD, payload: e.target.value });
  };
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" name="" id="" onChange={handleInput} />
        <h1>{state.input}</h1>
      </div>
    </>
  );
};
export default Counter;
