import React, { useState, useContext } from "react";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTransaction = () => {
  const { addIncome, addExpenses } = useContext(GlobalContext);

  //Styling Select menu
  const brandColor = "#28b9b5";
  const customStyles = {
    control: (base, state) => ({
      ...base,

      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? brandColor : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? brandColor : base.borderColor,
      },

      width: 70,
      height: 44,
      borderRadius: 5,
      marginRight: 10,
    }),

    container: (provided, state) => ({
      ...provided,
      color: "black",
      fontSize: 20,
    }),
    menu: (provided, state) => ({
      ...provided,
      width: 70,
    }),
  };

  const transactionOptions = [
    {
      value: "inc",
      label: "+",
    },
    {
      value: "exp",
      label: "-",
    },
  ];

  // Select State
  const [selectedOption, setSelectedOption] = useState({
    value: "inc",
    label: "+",
  });

  //Set new transaction
  const [transaction, setTtransaction] = useState({
    transactionText: "",
    transactionAmount: "",
  });
  const { transactionText, transactionAmount } = transaction;

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const onChangeTransaction = (e) => {
    setTtransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  //Show alert message
  const alertMessage = () =>
    toast.error("Invalid description or value", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    if (
      transactionText === "" ||
      transactionAmount === "" ||
      transactionAmount === 0
    ) {
      alertMessage();
    } else if (selectedOption.value === "inc") {
      const newTransaction = {
        id: uuidv4(),
        incomeText: transactionText,
        incomeAmount: transactionAmount * 1,
      };

      addIncome(newTransaction);
    } else {
      const newTransaction = {
        id: uuidv4(),
        expensesText: transactionText,
        expensesAmount: transactionAmount * 1,
      };

      addExpenses(newTransaction);
    }

    setTtransaction({
      transactionText: "",
      transactionAmount: "",
    });
  };

  return (
    <div className="add-container">
      <form onSubmit={onSubmitTransaction}>
        <Select
          name="selectedOption"
          value={selectedOption} // set selected value
          options={transactionOptions} // set list of options
          onChange={handleChange} // assign onChange function
          styles={customStyles} // assign custom styles
        />

        <input
          type="text"
          name="transactionText"
          value={transactionText}
          className="add-description"
          placeholder="Add description"
          autoComplete="off"
          onChange={onChangeTransaction}
        />
        <input
          type="number"
          name="transactionAmount"
          value={transactionAmount}
          className="add-value"
          // step="any"
          placeholder="Amount"
          autoComplete="off"
          onChange={onChangeTransaction}
        />
        <button className="add-btn">
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTransaction;
