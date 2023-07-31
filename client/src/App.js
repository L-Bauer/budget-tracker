import React, { Fragment } from 'react';

import './App.css';

// components
import InputTransaction from './components/InputTrans';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTransaction />
      </div>      
    </Fragment>
  );
}

export default App;
