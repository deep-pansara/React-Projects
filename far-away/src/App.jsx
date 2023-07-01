import React, { useState } from 'react'

const App = () => {
  return (<>
    <div className='app'>
      <h1>Travel List Taker</h1>
    </div>
    <FormSection />
  </>
  )
}


const FormSection = () => {
  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState("")
  const [itemList, setItemList] = useState([])


  const onSubmitForm = (e) => {
    e.preventDefault()
    const newItm = { description, quantity }
    setItemList([...newItm, itemList])
    console.log(itemList);
  }
  return <>
    <form action="" className='add-form' onSubmit={onSubmitForm}>
      <select>
        {
          Array.from({ length: 20 }, (_, i) => i + 1).map((arr, i) => {
            return (
              <option key={arr} value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }}>{arr}</option>
            )
          })
        }
      </select >
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  </>
}



export default App