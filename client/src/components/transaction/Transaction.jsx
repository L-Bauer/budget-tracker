import { Fragment } from 'react'

import '../../app.css'

// components
import InputTransaction from './InputTrans'
import ListTransactions from './ListTrans'

function Transaction () {
  return (
    <Fragment>
      <div className='container'>
        <InputTransaction />
      </div>
      <div className="container">
        <ListTransactions />
      </div>
    </Fragment>
  )
}

export default Transaction
