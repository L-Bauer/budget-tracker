import React, { Fragment, useState } from "react"

const InputTransaction = () => {

  const [item, setItem] = useState("")
  const [price, setPrice] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault()
    try {
      const time = "2023-07-28T05:00:00.000Z"
      const body = {item, price, time}
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Expanse Tracker List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={item} onChange={e => setItem(e.target.value)} placeholder="Item"/>
        <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price"/>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTransaction