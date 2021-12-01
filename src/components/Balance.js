import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transacAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const totalAmounts = transacAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <h3>Your Balance</h3>
      <h1 className={totalAmounts < 0 ? "amtRed" : "amtBlack"}>
        ₹ {totalAmounts}
      </h1>
    </div>
  );
};
