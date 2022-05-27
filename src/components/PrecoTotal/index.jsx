import "./PrecoTotal.css";

export const PrecoTotal = ({ currentSale, removeAll }) => {
  const total = currentSale.reduce((acumulator, valorAtual) => {
    return valorAtual.price + acumulator;
  }, 0);

  return (
    <section className="PrecoTotal--container">
      <div className="PrecoTotal--preco">
        <h4>Total:</h4>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={removeAll}>Remover Todos</button>
    </section>
  );
};
