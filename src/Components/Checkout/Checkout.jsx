import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );
      const { docs } = await getDocs(productsRef);

      docs.forEach((doc) => {
        const fields = doc.data();
        const stockDb = fields.stock;
        const addedProductToCart = cart.find((prod) => prod.id === doc.id);

        const productQuantity = addedProductToCart?.quantity;

        if (stockDb >= productQuantity) {
          batch.update(doc.ref, { stock: stockDb - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (!outOfStock.length) {
        const orderRef = collection(db, "orders");
        const { id } = await addDoc(orderRef, objOrder);
        setOrderId(id);

        batch.commit();

        const successMessage = () =>
          toast.success("Your purchase was successful!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        successMessage();

        clearCart();
      } else {
        const outStockMessage = () =>
          toast.info("Some products are out of stock!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        outStockMessage();

        setTimeout(() => {
          navigate("/cart");
        }, 2000);
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

  if (loading) {
    return (
      <h2 className="m-4 text-2xl font-semibold">Your order is processing</h2>
    );
  }

  if (orderId) {
    return (
      <>
        <h2 className="m-4 text-2xl font-semibold text-indigo-500">
          The order ID is: {orderId}
        </h2>
        <p className="m-4 text-xl font-semibold">
          Save it for verification at the time of withdrawal!
        </p>
        <p className="m-4 text-xl font-semibold">Thanks for your purchase!</p>
        <Link to="/">Go to Products</Link>
        <ToastContainer />
      </>
    );
  }

  return (
    <>
      <h2 className="text-4xl m-5 font-bold">Checkout</h2>
      {cart.length > 0 ? (
        <CheckoutForm onConfirm={createOrder} />
      ) : (
        <h2 className="text-3xl m-5">There is no products in the cart!</h2>
      )}
      <ToastContainer />
    </>
  );
};

export default Checkout;
