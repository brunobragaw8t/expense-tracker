import React, { useState } from 'react';

export const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div className="add-transaction">
      <div className="container">
        <h4 className="border-bottom pb-2 mb-3">Add a new transaction</h4>

        <form>
          <div class="mb-3">
            <label htmlFor="title" class="form-label">Title</label>

            <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div class="mb-3">
            <label htmlFor="amount" class="form-label">Amount</label>

            <div className="input-group">
              <input type="number" step="0.01" class="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

              <span className="input-group-text">€</span>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}
