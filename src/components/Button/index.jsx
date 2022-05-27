import "./Button.css";

export const Button = ({ handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className="Button">
        Adicionar
      </button>
    </>
  );
};
