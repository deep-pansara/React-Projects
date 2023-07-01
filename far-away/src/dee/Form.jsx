import { useState } from "react";

export const Form = ({ onAddItems }) => {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");


    function handleOnSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItm = {
            description, quantity, packed: false, id: Date.now()
        };

        onAddItems(newItm);
        console.log(newItm);
        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleOnSubmit}>
            <h3>What do you need for your trip ?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>

                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            </select>
            <input type="text" name="items" placeholder="Items..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
};
