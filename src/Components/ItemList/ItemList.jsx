import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex justify-between flex-wrap">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
