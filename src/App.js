import React from "react";
import {useState} from "react"
import './App.css';
import TopAppBar from './components/topAppBar/topAppBar'
import MainPage from "./components/mainPage/mainPage";
import TransactionsPage from "./components/transactionsPage/TransactionsPage";

function App() {
    const [page, setPage] = useState('Main');

    return (
    <div className="App">
      <header className="App-header">
        <TopAppBar setPage={setPage} />
          {page === 'Main' && <MainPage/>}
          {page === 'Transactions' && <TransactionsPage/>}
      </header>
    </div>
  );
}

export default App;
