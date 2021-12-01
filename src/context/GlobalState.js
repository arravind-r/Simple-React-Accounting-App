import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State of the global app
const initialState = {
  transactions: [
    // { id: 1, transactionName: "Flower", transactionAmount: -20, transactionDate: "2021-12-02" },
    // { id: 2, transactionName: "Salary", transactionAmount: 300, transactionDate: "2021-11-22" },
    // { id: 3, transactionName: "Book", transactionAmount: -10, transactionDate: "2021-12-05" },
    // { id: 4, transactionName: "Camera", transactionAmount: 150, transactionDate: "2021-12-12" },
  ],
};

//  Create Context
// in order to brind the initial state into other files for using it
export const GlobalContext = createContext(initialState);

//  Provider Component
// in order for other components to have access to global state, we need to wrap everything inside a provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // reducer  -  Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
