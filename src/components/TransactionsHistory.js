import React from "react";

import { SingleTransaction } from "./SingleTransaction";

export const TransactionsHistory = () => {
  return (
    <div>
      <h4>History</h4>
      <ul>
        <SingleTransaction />
      </ul>
    </div>
  );
};
