import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpensesTransaction = ({ expensesTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="list-item">
      <span className="description">{expensesTransaction.expensesText}</span>
      <div className="vlaue-delete">
        <span className="Value">${expensesTransaction.expensesAmount}</span>
        <button
          onClick={() => deleteTransaction(expensesTransaction.id)}
          className="delete-btn"
        >
          <i className="ion-ios-close-outline"></i>
        </button>
      </div>
    </li>
  );
};

export default ExpensesTransaction;
