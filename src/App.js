import logo from "./images/logo.svg";
import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { PrecoTotal } from "./components/PrecoTotal";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterSearch = (string) => {
    const filtered = products.filter((item) => {
      return (
        item.name.toLowerCase().includes(string.toLowerCase()) ||
        item.category.toLowerCase().includes(string.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  };

  const handleClick = (id) => {
    const addedProduct = products.find((item) => item.id === id);

    if (currentSale.includes(addedProduct)) {
      return addedProduct.qtd++;
    } else {
      setCurrentSale([...currentSale, addedProduct]);
    }
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  const handleDelete = (removedItem) => {
    const noDeletedItems = currentSale.filter(
      (item, index) => index !== removedItem
    );
    setCurrentSale(noDeletedItems);
  };

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((reponse) => reponse.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <header className="App--header ">
        <div className="Header--background ">
          <img src={logo} alt="logo Burger Kenzie" />
          <form>
            <fieldset>
              <input
                onChange={(event) => filterSearch(event.target.value)}
                type="text"
                placeholder="Digitar pesquisa"
              />
              <button>Pesquisar</button>
            </fieldset>
          </form>
        </div>
      </header>
      <main className="App ">
        <section className="Products--container">
          <ProductsList
            products={products}
            handleClick={handleClick}
            filteredProducts={filteredProducts}
          />
        </section>

        <section className="Cart--container">
          <div className="Cart--titulo">
            <h3>Carrinho de compras</h3>
          </div>
          <Cart currentSale={currentSale} handleDelete={handleDelete} />
          {currentSale.length !== 0 ? (
            <PrecoTotal currentSale={currentSale} removeAll={removeAll} />
          ) : (
            false
          )}
        </section>
      </main>
    </>
  );
}

export default App;
