import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

function Footer({ viewCart }: PropsType) {
  const { totalItem, totalPrice } = useCart();
  const year: number = new Date().getFullYear();
  return (
    <div className="footer">
      {viewCart ? (
        <p>Shopping cart ©: {year}</p>
      ) : (
        <>
          <p>total Items :{totalItem}</p>
          <p>total price :{totalPrice}</p>
          <p> Shopping cart ©: {year}</p>
        </>
      )}
    </div>
  );
}

export default Footer;
