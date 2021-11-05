import PanierItem from "./PanierItem";

const panierItem = [
  {
    id: 1,
    name: "Ail",
    quantite: 10,
    price: 250,
  },
  {
    id: 1,
    name: "Banane",
    quantite: 5,
    price: 550,
  },
];

const Panier = () => {
  return (
    <div className="borderedContainer panierContainer">
      <h2 className="title">Panier</h2>
      <div className="panierTotalPriceContainer">
        <p>Total : </p>
        <span className="panierTotalPrice">$250</span>
      </div>
      {panierItem.map((panierItem) => (
        <PanierItem panierItem={panierItem} />
      ))}
    </div>
  );
};

export default Panier;
