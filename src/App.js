import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpensesList from "./components/ExpensesList";
import { GlobalContextProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpensesList />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
