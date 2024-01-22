type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ viewCart, setViewCart }: PropsType) {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>view product</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View cart</button>
  );

  const content = <nav className="nav">{button}</nav>;
  return content;
}

export default Nav;
