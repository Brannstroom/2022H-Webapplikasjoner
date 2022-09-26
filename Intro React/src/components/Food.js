const Food = ({ food }) => (
  <ul>
    {food.map((food) => (
      <li key={food}>{food}</li>
    ))}
  </ul>
);

export default Food;
