import { Link } from "react-router-dom";

const Item = ({ id, name, image, price }) => {
  return (
    <article className="flex flex-col justify-center items-center border-b-2">
      <header className="m-2 mt-4">
        <h2>{name}</h2>
      </header>
      <picture className="mb-2">
        <img className="w-80 rounded-xl" src={image} alt={name} />
      </picture>
      <section>
        <p className="mb-2">Price: ${price}</p>
      </section>
      <footer className="mb-2">
        <Link to={`/item/${id}`}>Show details</Link>
      </footer>
    </article>
  );
};

export default Item;
