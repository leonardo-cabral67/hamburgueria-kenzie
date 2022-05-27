import "./Cart.css";
import { CartProducts } from "../CartProducts";
import sacolaVazia from "../../images/sacolaVazia.svg";

export const Cart = ({ currentSale, handleDelete }) => {
  return (
    <ul className="Cart">
      {currentSale.length !== 0 ? (
        <CartProducts currentSale={currentSale} handleDelete={handleDelete} />
      ) : (
        <img className="SacolaVazia" src={sacolaVazia} alt="Sacola vazia" />
      )}
    </ul>
  );
};
