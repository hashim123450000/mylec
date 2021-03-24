import React from 'react';
import './App.css';
import Child from './components/child';
import {TransactionProvider} from './components/transectioncontxt';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;

