import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';

export const Overview = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(transaction => transaction.amount >= 0)
    .reduce((total, transaction) => (total += transaction.amount), 0);

  const expenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((total, transaction) => (total += transaction.amount), 0);

  return (
    <div className="overview mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <h6 className="title text-uppercase">Income</h6>

              <p className="mb-0 text-success fw-bold">
                <NumberFormat
                  value={income}
                  thousandSeparator=' '
                  decimalSeparator=','
                  decimalScale={2}
                  fixedDecimalScale={true}
                  prefix='+'
                  suffix=' €'
                  displayType='text'
                />
              </p>
            </div>
          </div>

          <div className="col">
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <h6 className="title text-uppercase">Expenses</h6>

              <p className="mb-0 text-danger fw-bold">
                <NumberFormat
                  value={expenses}
                  thousandSeparator=' '
                  decimalSeparator=','
                  decimalScale={2}
                  fixedDecimalScale={true}
                  suffix=' €'
                  displayType='text'
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
