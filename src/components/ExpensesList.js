import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpensesTransaction from "./ExpensesTransaction";

const ExpensesList = () => {
  const { expensesTransactions } = useContext(GlobalContext);

  return (
    <div className="expenses-container">
      <h4>Expenses History</h4>
      <ul className="expenses-list">
        {expensesTransactions.map((expensesTransaction) => (
          <ExpensesTransaction
            key={expensesTransaction.id}
            expensesTransaction={expensesTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
