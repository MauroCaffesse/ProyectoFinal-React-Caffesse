import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, image, description, price }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleQuantity = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className="flex flex-col justify-center items-center">
      <header className="m-2">
        <h2>{name}</h2>
      </header>
      <picture className="mb-2">
        <img src={image} alt={name} className="w-80 rounded-xl" />
      </picture>
      <section>
        <p className="mb-2">Price: ${price}</p>
        <p className="mb-2">Description: {description}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={10} onAdd={handleQuantity} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
