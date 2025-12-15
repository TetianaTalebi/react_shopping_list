
import './App.css'
import ShoppingLIst from './ShoppingList';

function App() {
 
  // id-s in data are hardcoded
  const data = [
    {id: 1, item: "eggs", quantity: 12, completed: false},
    {id: 2, item: "milk", quantity: 1, completed: true},
    {id: 3, item: "chicken", quantity: 4, completed: false},
    {id: 4, item: "carrots", quantity: 6, completed: true}
  ];

  return (
    <>
      <ShoppingLIst items = {data} />
    </>
  )
}

export default App
