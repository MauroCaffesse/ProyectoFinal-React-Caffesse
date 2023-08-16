import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="pb-2 grid grid-cols-3 items-center border-b-2">
      <h2 className="justify-self-start">La Pastelería by Cande Leogrande</h2>
      <div className="flex justify-around items-center justify-self-center">
        <button>Home</button>
        <button>Productos</button>
        <button>Galeria</button>
        <button>Nosotros</button>
      </div>
      <div className="justify-self-end">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
