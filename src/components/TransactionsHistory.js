import React from "react";

import { SingleTransaction } from "./SingleTransaction";

export const TransactionsHistory = () => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        <SingleTransaction />
      </ul>
    </div>
  );
};
