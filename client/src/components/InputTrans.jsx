import { Fragment, useState } from 'react'

const InputTransaction = () => {
  const [transaction_date, setTransaction_date] = useState('')
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')

  const onSubmitForm = async e => {
    e.preventDefault()
    try {
      const body = { transaction_date, item, price }
      await fetch('http://localhost:5000/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      setTransaction_date('')
      setItem('')
      setPrice('')
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Expanse Tracker List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="date" className="form-control  m-2" value={transaction_date}
          onChange={e => setTransaction_date(e.target.value)}/>
        <input type="text" className="form-control m-2" value={item}
         onChange={e => setItem(e.target.value)} placeholder="Item"/>
        <input type="text" className="form-control m-2" value={price}
         onChange={e => setPrice(e.target.value)} placeholder="Price"/>
        <button className="btn btn-success w-75 h-85 m-2">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTransaction
