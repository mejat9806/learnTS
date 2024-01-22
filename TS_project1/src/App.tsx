import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductLIst from "./component/ProductLIst";
import { useState } from "react";
function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageCount = viewCart ? <Cart /> : <ProductLIst />;
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageCount}
      <Footer viewCart={viewCart} />
    </>
  );
  return content;
}

export default App;
