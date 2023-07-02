import './App.css';
import React from 'react';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  return (<>
    <div className='app'>
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend </Button>
      </div>
      <SplitBillForm />
    </div>
  </>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return <ul>{friends.map((friend) => {
    return <Friend friend={friend} key={friend.id} />
  })
  }</ul>
}


function Friend({ friend }) {
  return <li>
    <img src={friend.image} alt={friend.name} />
    <h3>
      {friend.name}
    </h3>
    {friend.balance < 0 && (
      <p className='red'>You owe {friend.name} {Math.abs(friend.balance)} $</p>
    )}
    {friend.balance > 0 && (
      <p className='green'> {friend.name} owes you{Math.abs(friend.balance)} $</p>
    )}
    {friend.balance === 0 && (
      <p >You and {friend.name} are Even</p>
    )}
    <Button>select</Button>
  </li>
}

function Button({ children }) {
  return <button className='button'>{children}</button>
}

function FormAddFriend() {
  return <form className='form-add-friend'>
    <label>Friend Name</label>
    <input type='text' />

    <label>Image URL</label>
    <input type='text' />
    <button className='button'>select</button>
    <Button >Add</Button>
  </form>
}

function SplitBillForm() {
  return <form className='form-split-bill'>
    <h2>Split a Bill with x </h2>

    <label>Bill Value</label>
    <input type='text' />

    <label>Your Expense</label>
    <input type='text' />

    <label>X Expense</label>
    <input type='text' disabled />

    <label>Who is Paying the Bill</label>
    <select>
      <option value="user">You</option>
      <option value="friend">x</option>
    </select>
    <Button >Split Bill</Button>
  </form>
}


export default App;
