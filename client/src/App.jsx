import { Fragment } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css'

// components
import Home from './components/home'
import Transaction from './components/transaction/Transaction'
import ListBudget from './components/budget/ListBudget'
import TopNavBar from './components/nav/NavBar';

function App() {
  return (
      <div className='App'>
        <Router>
          <TopNavBar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/transaction' element={<Transaction />}/>
                <Route path='/budget' element={<ListBudget />}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App
