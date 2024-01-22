import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

function Cart() {
  const { cart, REDUCER_ACTIONS, dispatch, totalItem, totalPrice } = useCart();
  const [confirm, SetConfirm] = useState(false);
  console.log(cart);

  function onSubmitOrder() {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    SetConfirm(true);
  }
  return (
    <div>
      {confirm ? (
        <h2>Thank You</h2>
      ) : (
        <>
          <h2 className="offscreen">hhh</h2>
          <ul className="cart">
            {cart.map((cartItem) => {
              return (
                <CartLineItem
                  key={cartItem.sku}
                  cartItem={cartItem}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              );
            })}
          </ul>
          <div className="cart__totals">
            <p>Total Item :{totalItem}</p>
            <p>Total Price :{totalPrice}</p>
            <button
              className="cart__submit"
              disabled={!totalItem}
              onClick={onSubmitOrder}
            >
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
