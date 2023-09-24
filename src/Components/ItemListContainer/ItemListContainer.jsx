import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListMemo = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const productsRef = !categoryId
          ? collection(db, "products")
          : query(
              collection(db, "products"),
              where("category", "==", categoryId)
            );

        const querySnapshot = await getDocs(productsRef);

        const adaptedProducts = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(adaptedProducts);
      } catch (error) {
        const errorMessage = () =>
          toast.error("Something wrong happened: " + error.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        errorMessage();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return (
      <h2 className="m-4 text-2xl font-semibold">Loading products for you..</h2>
    );
  }

  return (
    <div className="p-5">
      <h1>{greeting}</h1>
      {products.length > 0 ? (
        <ItemListMemo products={products} />
      ) : (
        <>
          <h2 className="m-4 text-2xl font-semibold">
            No products available for now
          </h2>
          <p className="m-4 text-2xl font-semibold">Sorry 🧁</p>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ItemListContainer;
