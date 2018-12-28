// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  const { type, expense, updates } = action;

  switch (type) {
    case 'ADD_EXPENSE':
      return [...state, expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          // Return new object, grab existing properties, add new properties from action.
          return {
            ...expense,
            ...updates,
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}

export default expensesReducer;
