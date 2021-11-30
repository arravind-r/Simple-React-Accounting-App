import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const SingleTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.transactionAmount < 0 ? "-" : "+";

  return (
    <div>
      <li
        className={
          transaction.transactionAmount < 0
            ? "left-border-minus"
            : "left-border-plus"
        }
      >
        <div className="date">{transaction.transactionDate}</div>
        <div className="label">{transaction.transactionName}</div>
        <div className="amount">
          {sign} ₹{Math.abs(transaction.transactionAmount)}
        </div>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
