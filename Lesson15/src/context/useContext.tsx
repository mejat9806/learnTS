import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

export type StateType = {
  count: number;
  input: string;
};

export const initialState = {
  count: 0,
  input: "",
};

export const REDUCER_ACTION_TYPE = {
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
export const reducer = (state: StateType, action: ReducerAction): StateType => {
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

export const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    [],
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    [],
  );
  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.PAYLOAD, payload: e.target.value });
  }, []);
  return { state, increment, decrement, handleInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;
type ChildrenType = {
  children?: ReactElement | undefined;
};
const initContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleInput: (e: ChangeEvent<HTMLInputElement>) => {},
};
export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

export const CounterProvider = ({
  children,
  ...initialState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseContethookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCounter = (): UseContethookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type useTextContext = {
  input: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): useTextContext => {
  const {
    state: { input },
    handleInput,
  } = useContext(CounterContext);
  return { input, handleInput };
};
