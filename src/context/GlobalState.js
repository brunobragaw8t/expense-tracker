import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

/**
 * Initial state
 */

const initialState = {
  transactions: [],
};


/**
 * Create context
 */

export const GlobalContext = createContext(initialState);


/**
 * Provider component
 */

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function storeTransaction(title, amount) {
    dispatch({
      type: 'STORE_TRANSACTION',
      payload: {
        title: title,
        amount: amount,
      },
    });
  }

  function destroyTransaction(id) {
    dispatch({
      type: 'DESTROY_TRANSACTION',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      storeTransaction,
      destroyTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
