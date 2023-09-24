import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const productRef = doc(db, "products", itemId);
        const documentSnapshot = await getDoc(productRef);

        if (documentSnapshot.exists()) {
          const fields = documentSnapshot.data();
          const adaptedProduct = { id: documentSnapshot.id, ...fields };
          setProduct(adaptedProduct);
        }
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

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <h2 className="m-4 text-2xl font-semibold">Loading...</h2>;
  }

  return (
    <>
      {product ? (
        <div>
          <ItemDetail {...product} />
        </div>
      ) : (
        <div>
          <h2 className="m-4 text-2xl font-semibold">
            Product does not exist!
          </h2>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
