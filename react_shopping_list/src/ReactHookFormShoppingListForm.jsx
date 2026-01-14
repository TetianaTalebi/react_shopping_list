import { useForm } from "react-hook-form";
import "./ShoppingListForm.css";

export default function ReactHookFormShoppingListForm({ addItem }) {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product: "",
      quantity: 1,
    },
  });

  const onSubmit = (data) => {
    addItem(data);
    reset();
    console.log(data);
  };

  return (
    <form className="ShoppingListForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        id="product"
        placeholder="Product name"
        {...register("product", {
          required: true,
          pattern: {
            value: /^[A-Za-z\s]{3,20}$/i,
            message:
              "Only letters and spaces are allowed,\nmin length is 3 characters,\nmax length is 20 characters",
          },
        })}
      />
      {errors.product && (
        <span style={{ color: "magenta", whiteSpace: "pre-wrap" }}>
          {errors.product.message}
        </span>
      )}
      
      <br />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        placeholder="1"
        {...register("quantity", { 
            min: {
              value: 1,
              message: "The minimum quantity is 1, the quantity can not be a negative number"
            },
            max: {
              value: 100,
              message: "The maximum quantity is 100"
            }
        })}
      />
      {errors.quantity && (
        <span style={{ color: "magenta", whiteSpace: "pre-wrap" }}>
          {errors.quantity.message}
        </span>
      )}

      <button type="submit">Add item</button>
      
    </form>
  );
}
