import { ChangeEvent, ReactElement } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";

type PropsType = {
  cartItem: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};
function CartLineItem({ cartItem, dispatch, REDUCER_ACTIONS }: PropsType) {
  const image: string = new URL(
    `../images/${cartItem.sku}.jpg`,
    import.meta.url,
  ).href;
  const lineTotal: number = cartItem.quantity * cartItem.price;
  const highQuantity: number = 20 > cartItem.quantity ? 20 : cartItem.quantity;
  const optionValue: number[] = [...Array(highQuantity).keys()].map(
    (i) => i + 1,
  );

  const options: ReactElement[] = optionValue.map((value) => {
    return (
      <option key={`opt${value}`} value={value}>
        {value}
      </option>
    );
  });
  const onChangeQTY = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTIY,
      payload: { ...cartItem, quantity: Number(e.target.value) },
    });
  };
  const onremoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.DELETE,
      payload: cartItem,
    });
  return (
    <div>
      <li className="cart__item">
        <img src={image} alt={cartItem.name} className="cart__img" />
        <div className="" aria-label="item name">
          {cartItem.name}
        </div>
        <div className="" aria-label="Price per label">
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(cartItem.price)}
          <label className="offscreen" htmlFor="itemQty">
            Item Quantity
          </label>
          <select
            name="itemQty"
            id="itemQty"
            className="cart__select"
            value={cartItem.quantity}
            aria-label="item quantity"
            onChange={onChangeQTY}
          >
            {options}
          </select>
        </div>
        <div className="cart__item-subTotal" aria-label="line item">
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(lineTotal)}
        </div>
        <button
          className="cart__button"
          aria-label="remove item form cart"
          title="Remove item from cart"
          onClick={onremoveFromCart}
        >
          ❌
        </button>
      </li>
    </div>
  );
}

export default CartLineItem;
