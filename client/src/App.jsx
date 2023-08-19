import { Fragment } from 'react'

import './App.css'

// components
import Transaction from './components/transaction/Transaction'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Transaction />
      </div>
    </Fragment>
  )
}

export default App
