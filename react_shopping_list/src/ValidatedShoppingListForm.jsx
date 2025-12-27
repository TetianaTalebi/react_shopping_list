// In this component, we are going to validate the product name for learning purposes only.

// We will prevent the form submission if the product name is an empty string or if it is longer than 20 characters.

import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  //   State for product name validation
  const [productIsValid, setProductIsValid] = useState(
    {
      productStatus: false, 
      message:"Product name cannot be empty!"
    }
  );

  const validate = (productName) => {
    if (productName.length === 0) {
      setProductIsValid({productStatus: false, message:"Product name cannot be empty!"});
    }
    else if (productName.length >20) {
      setProductIsValid({productStatus: false, message:"Product name cannot be longer than 20 characters!"});
    }
    else {
      setProductIsValid({productStatus: true, message: ""});
    }
  };

  const handleFormChange = (event) => {
    if (event.target.name === "product") {
      validate(event.target.value);
    }
    setFormData((currFormData) => {
      return { ...currFormData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (evt) => {

    evt.preventDefault();

    if(productIsValid.productStatus){
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
      setProductIsValid({productStatus: false, message:"Product name cannot be empty!"});
    }
  };

  return (
    <form className="ValidatedShoppingListForm" onSubmit={handleSubmit}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        id="product"
        placeholder="Product name"
        name="product"
        value={formData.product}
        onChange={handleFormChange}
      />
      {!productIsValid.productStatus && (
        <p style={{ color: "magenta" }}>{productIsValid.message}</p>
      )}
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
      <button disabled={!productIsValid.productStatus}>Add item</button>
    </form>
  );
}
