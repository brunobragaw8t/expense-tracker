export default (state, action) => {
  switch (action.type) {
    case 'STORE_TRANSACTION':
      const id = Math.max(
        state.transactions.map(transaction => transaction.id)
      ) + 1;

      return {
        ...state,
        transactions: [
          {
            id: id,
            title: action.payload.title,
            amount: action.payload.amount,
          },
          ...state.transactions,
        ]
      }

    case 'DESTROY_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

    default:
      return state;
  }
};
