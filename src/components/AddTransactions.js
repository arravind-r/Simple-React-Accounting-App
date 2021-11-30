import React from "react";

export const AddTransactions = () => {
  return (
    <div className="add-transaction-wrap">
      <h2>Add New Transaction</h2>
      <form action="">
        <div className="transaction-name">
          <label htmlFor="transactionName">Label</label>
          <input
            type="text"
            name="transactionName"
            placeholder="Transaction Label"
          />
        </div>
        <div className="transaction-amount">
          <label htmlFor="transactionAmount">Amount
            
          </label>
          <span>(negative - expense, positive - income)</span>
          <input
            type="number"
            name="transactionAmount"
            placeholder="Transaction Amount"
          />
        </div>
        <div className="transaction-date">
          <label htmlFor="transactionDate">Date</label>
          <input
            type="date"
            name="transactionDate"
            placeholder="Transaction Date"
          />
        </div>
        <button type="submit">Add Transaction </button>
      </form>
    </div>
  );
};
