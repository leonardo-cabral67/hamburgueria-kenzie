import "./Products.css";
import { Button } from "../Button";

export const Products = ({ products, handleClick }) => {
  return (
    <>
      {products.map((item, index) => {
        const { id, name, category, price, img } = item;
        item.qtd = 0;
        return (
          <li key={id} className="Products">
            <figure>
              <div className="Image--container">
                <img src={img} alt="imagem do produto" />
              </div>
              <figcaption>
                <h2>{name}</h2>
                <span>{category}</span>
                <p>
                  {price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <Button
                  handleClick={() => {
                    handleClick(id);
                  }}
                />
              </figcaption>
            </figure>
          </li>
        );
      })}
    </>
  );
};
