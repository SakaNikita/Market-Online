import Product from "./Product";
import productsProvider from "../../Features/product/products";
import { useSelector } from "react-redux";
import { getSelectedCatégories } from "../../Features/product/productsSlice";

const Products = () => {
  const selectedCatégories = useSelector(getSelectedCatégories);
  return (
    <div className="productsContainer">
      {productsProvider
        .filter((product) => {
          if (selectedCatégories === "Tous") return true;

          return selectedCatégories === product.category;
        })
        .map((product) => (
          <Product product={product} />
        ))}
    </div>
  );
};

export default Products;
