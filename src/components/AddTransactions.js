import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransactions = () => {
  // Setting up the default state for AddTransactions input fields
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("0");
  const [transactionDate, setTransactionDate] = useState("mm/dd/yyyy");

  const { addTransaction } = useContext(GlobalContext);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      transactionName: transactionName,
      transactionAmount: +transactionAmount,
      transactionDate: transactionDate,
    };

    addTransaction(newTransaction);

    setTransactionName("");
    setTransactionAmount("0");
    setTransactionDate("mm-dd-yyyy");
  };

  return (
    <div className="add-transaction-wrap">
      <h2>Add New Transaction</h2>
      <form onSubmit={onFormSubmit}>
        <div className="transaction-name">
          <label htmlFor="transactionName">Label</label>
          <input
            type="text"
            name="transactionName"
            placeholder="Transaction Label"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>
        <div className="transaction-amount">
          <label htmlFor="transactionAmount">Amount</label>
          <span>(negative - expense, positive - income)</span>
          <input
            type="number"
            name="transactionAmount"
            placeholder="Transaction Amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <div className="transaction-date">
          <label htmlFor="transactionDate">Date</label>
          <input
            type="date"
            name="transactionDate"
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction </button>
      </form>
    </div>
  );
};
