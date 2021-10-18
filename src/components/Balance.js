import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expensesTransactions } = useContext(
    GlobalContext
  );

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expensesAmounts = expensesTransactions.map(
    (expensesTransaction) => expensesTransaction.expensesAmount
  );

  const totalExpenses = expensesAmounts
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  return (
    <div className="balance-container">
      <h1>${(totalIncome - totalExpenses).toFixed(2)}</h1>
      <div className="budget-results-income">
        <div className="budget-results-text">Total Income</div>
        <div className="budget-results-value">+ {totalIncome}</div>
      </div>
      <div className="budget-results-expenses">
        <div className="budget-results-text">Total Expenses</div>
        <div className="budget-results-value">- {totalExpenses}</div>
      </div>
    </div>
  );
};

export default Balance;
