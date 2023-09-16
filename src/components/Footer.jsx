import { useCart } from "../hooks/useCart";
import "./Footer.css";

function Footer() {
  const cart = useCart();
  return <footer className="footer">{JSON.stringify(cart, null, 2)}</footer>;
}

export default Footer;
