import React, { useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useSTate('')
    const addList =() => {
      const listData = {
        title:title,
        amount:amount
      }
    }
  return (
    <>
    <h3>{title}</h3>
    <h3>{amount}</h3>
    <form onsubmit={addList}>
    <div>
      <label>รายการ</label>
      <input type="text" name="list" onChange={(event) => setTitle(event.target.value)}/>
    </div>
    <div>
      <label>จำนวนเงิน</label>
      <input  type="number" name="amount" onChange={(event) => setAmount(event.target.value)}/>
    </div>
    <div>
    <button type="submit" name="submit"></button>
    </div>
    </form>
    </>
  )
}