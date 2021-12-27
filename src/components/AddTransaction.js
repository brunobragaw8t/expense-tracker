import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const { storeTransaction } = useContext(GlobalContext);

  function createTransaction(e) {
    e.preventDefault();

    storeTransaction(title, Number(amount));

    setTitle('');
    setAmount(0);
  }

  return (
    <div className="add-transaction">
      <div className="container">
        <h4 className="border-bottom pb-2 mb-3">Add a new transaction</h4>

        <form
          onSubmit={createTransaction}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>

            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>

            <div className="input-group">
              <input type="number" step="0.01" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} autocomplete="off" />

              <span className="input-group-text">€</span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}
