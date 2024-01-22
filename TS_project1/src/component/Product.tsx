import { ProductType } from "../context/ProductProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};
function Product({ product, REDUCER_ACTIONS, dispatch, inCart }: PropsType) {
  const image: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(image);

  function AddtoCart() {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, quantity: 1 },
    });
  }
  const itemInCart = inCart ? "item in cart:✔  " : null;

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={image} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={AddtoCart}>Add to Cart</button>
    </article>
  );
}

export default Product;
