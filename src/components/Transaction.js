import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';

export const Transaction = ({id, title, amount}) => {
  const { destroyTransaction } = useContext(GlobalContext);

  return (
    <li key={id} className="transaction list-group-item d-flex justify-content-between align-items-center position-relative">
      <h6 className="title mb-0">{title}</h6>

      <span className={`value fw-bold ${amount >= 0 ? 'text-success' : 'text-danger'}`}>
        <NumberFormat
          value={amount}
          thousandSeparator=' '
          decimalSeparator=','
          decimalScale={2}
          fixedDecimalScale={true}
          suffix=' €'
          displayType='text'
        />
      </span>

      <button
        type="button"
        className="delete btn btn-danger btn-sm position-absolute start-100 top-50 translate-middle-y"
        onClick={() => destroyTransaction(id)}
      >
        &times;
      </button>
    </li>
  )
}
