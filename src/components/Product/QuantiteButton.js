const QuantiteButton = ({ setQuantite, quantite }) => {
  const substractQuantite = () => {
    if (quantite <= 1) return;
    const newQuantite = quantite - 1;
    setQuantite(newQuantite);
  };
  const addQuantite = () => {
    const newQuantite = quantite + 1;
    setQuantite(newQuantite);
  };

  return (
    <div className="quantiteButton">
      <button onClick={substractQuantite}>&#8722;</button>
      <span>{quantite}</span>
      <button onClick={addQuantite}>&#43;</button>
    </div>
  );
};

export default QuantiteButton;
