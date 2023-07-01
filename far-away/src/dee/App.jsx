import { useState } from "react";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Logo } from "./Logo";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item));
  }

  const clearList = () => {
    const confirmMsg = window.confirm('Are you sure you want to remove this item');

    if (confirmMsg) setItems([]);

  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleRemoveItem} onToggleItem={handleToggleItem} clearList={clearList} />
      <Stats items={items} />
    </div>
  );
}

export default App;
