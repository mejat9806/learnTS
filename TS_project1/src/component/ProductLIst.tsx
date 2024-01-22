import { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProduct from "../hooks/useProduct";
import Product from "./Product";

function ProductLIst() {
  const { cart, REDUCER_ACTIONS, dispatch } = useCart();
  const { products } = useProduct();
  console.log(products);
  let pageContent: ReactElement | ReactElement[] = <p>loading</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }
  const content = <main className="main main--products">{pageContent}</main>;

  return content;
}

export default ProductLIst;
