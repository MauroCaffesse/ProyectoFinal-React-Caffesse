import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="pb-2 grid grid-cols-3 items-center border-b-2">
      <Link to="/" className="justify-self-start">
        <h2 className="text-xl">La Pastelería by Cande Leogrande</h2>
      </Link>
      <div className="flex justify-around items-center justify-self-center">
        <NavLink to="/category/cake" className="mx-5">
          Cakes
        </NavLink>
        <NavLink to="/category/pie" className="mx-5">
          Pies
        </NavLink>
        <NavLink to="/category/muffins" className="mx-5">
          Muffins
        </NavLink>
      </div>
      <div className="justify-self-end">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
