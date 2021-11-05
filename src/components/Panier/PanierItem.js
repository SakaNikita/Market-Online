import Icon from "./Icon";

const PanierItem = ({ panierItem }) => {
  return (
    <div className="panierItem">
      <div className="panierItemDescContainer">
        <b>Nom: {panierItem.name}</b>
        <p>Quantité: {panierItem.quantite}</p>
        <p>Prix: {panierItem.price}</p>
      </div>
      <div className="panierItemRemoveButtonContainer">
        <span>
          <Icon />
        </span>
      </div>
    </div>
  );
};

export default PanierItem;
