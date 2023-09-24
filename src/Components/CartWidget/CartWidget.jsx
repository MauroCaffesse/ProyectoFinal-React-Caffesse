import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/cart")}
      className="flex justify-center items-center"
    >
      <ShoppingCartIcon className="w-6 h-6 m-2" />
      {totalQuantity}
    </button>
  );
};

export default CartWidget;
