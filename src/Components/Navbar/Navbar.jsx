import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="pb-2 grid grid-cols-3 items-center border-b-2">
      <NavLink
        to="/"
        className="justify-self-start"
        style={({ isActive }) => {
          return {
            borderBottom: isActive ? "2px solid #646cff" : "",
          };
        }}
      >
        <h2 className="text-xl">La Pastelería by Cande Leogrande</h2>
      </NavLink>
      <div className="flex justify-around items-center justify-self-center">
        <NavLink
          to="/category/cake"
          className="mx-5"
          style={({ isActive }) => {
            return {
              color: isActive ? "#646aad" : "",
              borderBottom: isActive ? "2px solid #646aad" : "",
            };
          }}
        >
          Cakes 🍰
        </NavLink>
        <NavLink
          to="/category/pie"
          className="mx-5"
          style={({ isActive }) => {
            return {
              color: isActive ? "#646aad" : "",
              borderBottom: isActive ? "2px solid #646aad" : "",
            };
          }}
        >
          Pies 🥧
        </NavLink>
        <NavLink
          to="/category/muffins"
          className="mx-5"
          style={({ isActive }) => {
            return {
              color: isActive ? "#646aad" : "",
              borderBottom: isActive ? "2px solid #646aad" : "",
            };
          }}
        >
          Muffins 🧁
        </NavLink>
      </div>
      <div className="justify-self-end">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
