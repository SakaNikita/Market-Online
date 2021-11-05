import Filter from "./Filter";

const Filters = () => {
  return (
    <div className="borderedContainer">
      <b>Catégories : </b>
      {["Fruits", "Légumes", "Tous"].map((catégories) => (
        <Filter catégories={catégories} isActive={false} />
      ))}
    </div>
  );
};

export default Filters;
