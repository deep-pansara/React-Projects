const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1>🏖️ Far Away 🎒</h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your trip ?</h3>
    </div>
  );
};
const PackingList = () => {
  return <div className="list">LIST</div>;
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>You have x items in your list and you already packed X (X%)</em>
    </footer>
  );
};

export default App;
