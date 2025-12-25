import { useState } from "react";
import "./ShoppingListForm.css";

export default function ShoppingListForm() {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleFormChange = (event) => {
    setFormData((currFormData) => {
      return { ...currFormData, [event.target.name]: event.target.value };
    });
  };

  return (
    <form className="ShoppingListForm">
      <h1>
        Product is {formData.product} and its quantity is {formData.quantity}
      </h1>
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
