import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history mb-5">
      <div className="container">
        <h4 className="border-bottom pb-2 mb-3">History</h4>

        <ul className="list-group">
          {transactions.map(transaction => (
            <Transaction
              id={transaction.id}
              title={transaction.title}
              amount={transaction.amount}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
