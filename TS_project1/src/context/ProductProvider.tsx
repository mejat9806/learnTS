import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
type contextChildrenTYpe = { children?: ReactElement | ReactElement[] };

const initState: ProductType[] = [];
/* const init: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
]; */
export type UseProductContextType = { products: ProductType[] };

const initContextstate: UseProductContextType = {
  products: [],
};

const ProductContext = createContext<UseProductContextType>(initContextstate);

export function ProductProvider({
  children,
}: contextChildrenTYpe): ReactElement {
  const [products, setProducts] = useState<ProductType[]>(initState);
  useEffect(() => {
    const fetchProduct = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((response) => response.json())
        .catch((error) => {
          if (error instanceof Error) {
            console.log(error.message);
          }
        });
      return data;
    };
    fetchProduct().then((products) => setProducts(products));
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
