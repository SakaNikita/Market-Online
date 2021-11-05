import { useState } from "react";
import QuantiteButton from "./QuantiteButton";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Features/panier/panierSlice";

const Product = ({ product }) => {
  const [quantite, setQuantite] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div>
        <img src={`./${product.img}.jpg`} alt={`product image`} />
      </div>
      <div className="desContainer">
        <h2 className="title">{product.name}</h2>
        <p>${product.price}</p>
        <QuantiteButton quantite={quantite} setQuantite={setQuantite} />
        <button
          className="ajouterAuPanierButton"
          onClick={() => {
            dispatch(addItemToCart("Hello Dear Client!"));
          }}
        >
          AJOUTER AU PANIER
        </button>
        <a href="/">Voir plus de détails &#8594;</a>
      </div>
    </div>
  );
};

export default Product;
