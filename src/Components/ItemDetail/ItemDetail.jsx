import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, image, description, price }) => {
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
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
