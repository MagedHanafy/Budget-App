import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="list-item">
      <span className="description">{incomeTransaction.incomeText}</span>
      <div className="vlaue-delete">
        <span className="Value">${incomeTransaction.incomeAmount}</span>
        <button
          onClick={() => deleteTransaction(incomeTransaction.id)}
          className="delete-btn"
        >
          <i className="ion-ios-close-outline"></i>
        </button>
      </div>
    </li>
  );
};

export default IncomeTransaction;
