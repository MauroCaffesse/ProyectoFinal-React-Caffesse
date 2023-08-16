import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContianer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a la Pastelería!"} />
    </>
  );
}

export default App;
