import { Fragment, useState } from 'react'

const EditTransaction = ({ transaction }) => {
  const [item, setItem] = useState(transaction.item)
  const [price, setPrice] = useState(transaction.price)

  const updateTransaction = async e => {
    e.preventDefault()
    try {
      const body = { item, price }
      const response = await fetch(`http://localhost:5000/transactions/${transaction.trans_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      console.log(response)
      window.location.reload()
    } catch (error) {
      console.error(error.message)
    }
  }

  const setBackOriginal = () => {
    setItem(transaction.item)
    setPrice(transaction.price)
  }

  return <Fragment>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${transaction.trans_id}`}>
      Edit
    </button>

    <div className="modal fade" id={`id${transaction.trans_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Edit Transaction</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control" value={item} onChange={e => setItem(e.target.value)}/>
            <input type="number" className="form-control" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setBackOriginal()}>Close</button>
            <button type="button" className="btn btn-warning" onClick={e => updateTransaction(e)}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default EditTransaction
