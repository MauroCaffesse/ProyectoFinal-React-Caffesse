import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalQuantity, total } = useCart();

  const message = () =>
    toast.info("Your cart is empty!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClearCart = () => {
    message();
    clearCart();
  };

  if (totalQuantity === 0) {
    return (
      <div className="m-4">
        <h2 className="text-2xl font-semibold m-4">
          There is no products in cart!
        </h2>
        <Link to="/">Go to Products</Link>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl m-4 font-bold">Cart</h2>
      <div className="flex flex-col justify-center items-center">
        {cart.map((p) => (
          <div
            key={p.id}
            className="flex justify-around items-center m-4 py-1 border border-blue-400 rounded-xl"
          >
            <div className="flex justify-start w-80">
              <h3 className="px-4 text-2xl">{p.name}</h3>
            </div>
            <p className="w-40">Product price: ${p.price}</p>
            <p className="w-40">Quantity: {p.quantity}</p>
            <button onClick={() => removeItem(p.id)} className="border-none">
              Remove item
            </button>
          </div>
        ))}
        <h3 className="m-4 font-bold text-xl border-b w-30">Total: ${total}</h3>
        <div>
          <button onClick={handleClearCart} className="border-none">
            Clean Cart
          </button>
          <Link to="/checkout" className="p-4">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
