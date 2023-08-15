import React, { Fragment } from 'react'

import './App.css'

// components
import InputTransaction from './components/InputTrans'
import ListTransactions from './components/ListTrans'

function App() {
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

export default App
