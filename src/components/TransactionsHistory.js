import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import { SingleTransaction } from "./SingleTransaction";

export const TransactionsHistory = () => {
  // const context = useContext(GlobalContext);

  const { transactions } = useContext(GlobalContext);

  // console.log(context);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <SingleTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
