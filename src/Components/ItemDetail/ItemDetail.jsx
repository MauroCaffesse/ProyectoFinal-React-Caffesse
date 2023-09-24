import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

const ItemDetail = ({ id, name, image, description, stock, price }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useCart();

  const handleQuantity = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="flex flex-col justify-center items-center">
      <header className="m-2">
        <h2 className="m-1 text-2xl">{name}</h2>
      </header>
      <picture className="mb-2">
        <img src={image} alt={name} className="w-80 rounded-xl" />
      </picture>
      <section className="flex flex-col items-center">
        <p className="mb-2 border-b-2 w-30 font-bold">Price: ${price}</p>
        <p className="mb-2 border-b-2">Description: {description}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart">Complete purchase</Link>
        ) : stock > 0 ? (
          <ItemCount initial={1} stock={stock} onAdd={handleQuantity} />
        ) : (
          <h3 className="m-4 text-lg font-semibold">Out of stock</h3>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
