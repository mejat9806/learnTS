/* eslint-disable no-fallthrough */
import { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };
const initCartState: CartStateType = { cart: [] };

type contextChildrenTYpe = { children?: ReactElement | ReactElement[] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  DELETE: "DELETE",
  QUANTIY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

function reducer(state: CartStateType, action: ReducerAction): CartStateType {
  console.log(state);
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("now payload to add");
      }
      const { sku, name, price } = action.payload;
      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku, //THIS WILL REMOVER THE SKU IF IT NOT THE SAME
      );

      const itemExist: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku,
      );

      const qty: number = itemExist ? itemExist.quantity + 1 : 1;
      console.log(state);
      return {
        ...state,
        cart: [...filterCart, { sku, name, price, quantity: qty }],
      };
    }

    case REDUCER_ACTION_TYPE.DELETE: {
      if (!action.payload) {
        throw new Error("now payload to delete");
      }
      const { sku } = action.payload;
      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku, //THIS WILL REMOVER THE SKU IF IT NOT THE SAME
      );
      return { ...state, cart: [...filterCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTIY: {
      if (!action.payload) {
        throw new Error("now payload to  add quantity");
      }
      const { sku, quantity } = action.payload;

      const itemExist: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku,
      );

      if (!itemExist) {
        throw new Error("item must exist to update quantity");
      }

      const updateDItem: CartItemType = { ...itemExist, quantity };

      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku, //THIS WILL REMOVER THE SKU IF IT NOT THE SAME
      );
      return { ...state, cart: [...filterCart, updateDItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("error");
  }
}

const useCartContext = (initialCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initialCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);
  const totalItem: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return cartItem.quantity * cartItem.price + previousValue;
    }, 0),
  );
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });
  return { dispatch, REDUCER_ACTIONS, totalItem, totalPrice, cart };
};

export type useCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: useCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItem: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<useCartContextType>(initCartContextState);

export function CartProvider({ children }: contextChildrenTYpe): ReactElement {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
