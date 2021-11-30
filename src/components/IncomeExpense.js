import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const transacAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const incomeAmount = transacAmounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenseAmount = (
    transacAmounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="income-expense-wrap">
      <div className="income">
        <p>Income</p>
        <h4>₹ {incomeAmount}</h4>
      </div>
      <div className="expense">
        <p>Expenses</p>
        <h4>₹ {expenseAmount}</h4>
      </div>
    </div>
  );
};
