import React from 'react';
import NumberFormat from 'react-number-format';

export const Transaction = ({id, title, amount}) => {
  return (
    <li key={id} className="transaction list-group-item d-flex justify-content-between align-items-center">
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
    </li>
  )
}
