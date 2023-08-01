
import React, { Fragment, useEffect, useState } from "react";
import {format} from 'date-fns';

const ListTransactions = () => {
  const [transactions, setTransactions] = useState([])

  const getTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5000/transactions")
      const transactionsData = await response.json()

      setTransactions(transactionsData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return <Fragment>
    {" "}
    <table className="table table-striped table-hover text-center mt-5">
      <thead>
        <tr>
          <th>Transaction Date</th>
          <th>Item</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.trans_id}>
            <td>{format(new Date(transaction.transaction_date), 'MM/dd/yyyy')}</td>
            <td>{transaction.item}</td>
            <td>{transaction.price}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
</Fragment>
}

export default ListTransactions