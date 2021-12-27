import React from 'react';

export const Transaction = () => {
  return (
    <li className="transaction list-group-item d-flex justify-content-between align-items-center">
      <h6 className="title mb-0">Cash</h6>

      <span className="value fw-bold text-danger">- 400 €</span>
    </li>
  )
}
