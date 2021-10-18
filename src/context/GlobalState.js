import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expensesTransactions:
    JSON.parse(localStorage.getItem("expensesTransactions")) || [],
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expensesTransactions",
      JSON.stringify(state.expensesTransactions)
    );
  });

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  const addExpenses = (expensesTransaction) => {
    dispatch({
      type: "ADD_EXPENSES",
      payload: expensesTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expensesTransactions: state.expensesTransactions,
        addIncome,
        addExpenses,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
