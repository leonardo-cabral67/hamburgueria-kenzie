import "./CartProducts.css";

export const CartProducts = ({ currentSale, handleDelete }) => {
  return (
    <>
      {currentSale.map((item, index) => {
        const { name, category, img, qtd } = item;
        return (
          <li key={index} className="CartItem">
            <figure className="ProductCart--container">
              <div>
                <img src={img} alt="imagem do produto" />
              </div>
              <figcaption className="ProductCart--info">
                <h4>{name}</h4>
                <p>{category}</p>
                <p>quantidade: {qtd}</p>
              </figcaption>
            </figure>
            <button className="btnRemove" onClick={() => handleDelete(index)}>
              remover
            </button>
          </li>
        );
      })}
    </>
  );
};
