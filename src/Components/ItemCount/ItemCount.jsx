import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <button onClick={decrement} className="p-1 rounded-full border-none">
          -
        </button>
        <h4 className="mx-5">{quantity}</h4>
        <button onClick={increment} className="p-1 rounded-full border-none">
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => onAdd(quantity)}
          disabled={!stock}
          className="border-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
