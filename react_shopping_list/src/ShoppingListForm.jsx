import { useState } from "react";
import "./ShoppingListForm.css";

export default function ShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleFormChange = (event) => {
    setFormData((currFormData) => {
      return { ...currFormData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(formData);
    setFormData({product: "", quantity: 0});
  };

  return (
    <form className="ShoppingListForm" onSubmit={handleSubmit}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        id="product"
        placeholder="Product name"
        name="product"
        value={formData.product}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        placeholder="1"
        min="0"
        name="quantity"
        value={formData.quantity}
        onChange={handleFormChange}
      />
      <button>Add item</button>
    </form>
  );
}
