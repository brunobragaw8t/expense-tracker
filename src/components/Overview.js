import React from 'react';

export const Overview = () => {
  return (
    <div className="overview mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <h6 className="title text-uppercase">Income</h6>

              <p className="mb-0 text-success fw-bold">+ 0,00 €</p>
            </div>
          </div>

          <div className="col">
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <h6 className="title text-uppercase">Expenses</h6>

              <p className="mb-0 text-danger fw-bold">- 0,00 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
