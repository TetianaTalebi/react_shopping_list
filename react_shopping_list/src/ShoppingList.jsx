import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingLIst({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          obj={{...i}}
          key={i.id}
        />
      ))}
    </ul>
  );
}
