import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// ShoppingListForm submits data into ShoppingList
// import ShoppingListForm from "./ShoppingListForm";

// import ShoppingListItem from "./ShoppingListItem";

import ReactHookFormShoppingListForm from "./ReactHookFormShoppingListForm";


export default function ShoppingList() {

  // items is an array of objects
  const [items, setItems] = useState([
    // for now these 2 items are hardcoded in the state
    {id: uuidv4(), product: "bananas", quantity: 10},
    {id: uuidv4(), product: "milk", quantity: 2}
  ]);

  const addItem=(item) => {
    return setItems((currItems) => [...currItems, {...item, id: uuidv4()}]);
  }

  return (
    <div className="ShoppingList" style={{fontSize: '40px'}}>
      <h1 style={{fontSize: '50px', color: "salmon"}}>Shopping List</h1>
      <ul>
        <ReactHookFormShoppingListForm addItem={addItem} />
        {items.map((i) => <li key={i.id}>{i.product} - {i.quantity}</li>)}
      </ul>
    </div>
    
  );
}
