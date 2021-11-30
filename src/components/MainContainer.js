import React from "react";

import { AddTransactions } from "./AddTransactions";
import { Balance } from "./Balance";
import { IncomeExpense } from "./IncomeExpense";
import { TransactionsHistory } from "./TransactionsHistory";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="left-section">
        <AddTransactions />
      </div>
      <div className="right-section">
        <div className="right-wrap">
          <div className="balance-container">
            <Balance />
          </div>
          <div className="income-expense-container">
            <IncomeExpense />
          </div>
          <div className="transaction-history-container">
            <TransactionsHistory />
          </div>
        </div>
      </div>
    </div>
  );
};
