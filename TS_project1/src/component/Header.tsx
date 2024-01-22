import useCart from "../hooks/useCart";
import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
function Header({ viewCart, setViewCart }: PropsType) {
  const { totalItem, totalPrice } = useCart();
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme co.</h1>
        <div className="header__price-box">
          <p>Total Items:{totalItem}</p>
          <p>Total Price:{totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
}

export default Header;
