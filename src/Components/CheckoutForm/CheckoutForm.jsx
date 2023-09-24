import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handelConfirm = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handelConfirm} className="flex flex-col w-80">
        <label className="m-2 text-xl flex flex-col justify-center items-center">
          Name
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="mx-10 my-4 border rounded-md w-80 p-1"
            required
          />
        </label>
        <label className="m-2 text-xl flex flex-col justify-center items-center">
          Phone
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            className="mx-10 my-4 border rounded-md w-80 p-1"
            required
          />
        </label>
        <label className="m-2 text-xl flex flex-col justify-center items-center">
          Email
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="mx-10 my-4 border rounded-md w-80 p-1"
            required
          />
        </label>
        <div>
          <button type="submit" className="border bg-blue-200">
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
