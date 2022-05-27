import "./ProductsList.css";
import { Products } from "../Products";
import { ProductsFiltered } from "../ProductsFiltered";

export const ProductsList = ({ products, handleClick, filteredProducts }) => {
  return (
    <ul className="ProductsList">
      {filteredProducts.length === 0 ? (
        <Products products={products} handleClick={handleClick} />
      ) : (
        <ProductsFiltered
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
      )}
    </ul>
  );
};
