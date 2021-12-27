import React from 'react';
import { Transaction } from './Transaction';

export const History = () => {
  return (
    <div className="history mb-5">
      <div className="container">
        <h4 className="border-bottom pb-2 mb-3">History</h4>

        <ul className="list-group">
          <Transaction />
        </ul>
      </div>
    </div>
  )
}
