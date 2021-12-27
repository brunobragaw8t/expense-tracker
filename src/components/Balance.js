import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((total, transaction) => (total += transaction.amount), 0);

  return (
    <div className="balance mb-4">
      <div className="container">
        <h6 className="title mb-0 text-uppercase">
          Balance
        </h6>

        <h1 className="value mb-0">
          <NumberFormat
            value={balance}
            thousandSeparator=' '
            decimalSeparator=','
            decimalScale={2}
            fixedDecimalScale={true}
            suffix=' €'
            displayType='text'
          />
        </h1>
      </div>
    </div>
  )
}
