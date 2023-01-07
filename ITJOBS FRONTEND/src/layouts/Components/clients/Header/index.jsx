import { Link } from "react-router-dom";
import config from "~/config";


const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={config.clientsRoutes.home}>Home</Link>
        </li>
        <li>
          <Link to={config.clientsRoutes.about}>About</Link>
        </li>
        <li>
          <Link to={config.clientsRoutes.product}>Product</Link>
        </li>
        <li>
          <Link to={config.clientsRoutes.cart}>Cart</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
