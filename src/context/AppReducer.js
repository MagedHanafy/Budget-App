export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case "ADD_EXPENSES":
      return {
        ...state,
        expensesTransactions: [action.payload, ...state.expensesTransactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expensesTransactions: state.expensesTransactions.filter(
          (expensesTransaction) => expensesTransaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
