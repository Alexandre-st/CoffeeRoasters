import { coffees } from "../data/data";

const Coffee = () => {
  return (
    <div className="collection-content">
      {coffees.map((coffee) => (
        <div className="collection-content-child" key={coffee.id}>
          <img src={coffee.img} alt={coffee.name} />
          <h3>{coffee.name}</h3>
          <p>{coffee.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Coffee;
