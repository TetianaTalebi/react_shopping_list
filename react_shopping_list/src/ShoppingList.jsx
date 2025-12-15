export default function ShoppingLIst({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li
          key={i.id}
          style={{
            textDecorationLine: i.completed ? "line-through" : "none",
            color: i.completed ? "gray" : "snow",
            fontSize: "40px",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}
