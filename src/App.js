import React from "react";
import {useState} from "react"
import './App.css';
import TopAppBar from './components/topAppBar/topAppBar'
import MainPage from "./components/mainPage/mainPage";
import StatisticsPage from "./components/statisticsPage/statisticsPage";
import TransactionsPage from "./components/transactions/transactionsPage";

function App() {
    const [page, setPage] = useState('Main');
    const [isAdmin, setIsAdmin] = useState(false)
    return (
    <div className="App">
      <header className="App-header" >
        <TopAppBar
            setPage={setPage}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
        />
          {page === 'Main' && <MainPage/>}
          {page === 'Statistics' && <StatisticsPage/>}
          {page === 'Transactions' &&
              <TransactionsPage
                  style={{height:'100%'}}
                  isAdmin={isAdmin}/>}
      </header>
    </div>
  );
}

export default App;
