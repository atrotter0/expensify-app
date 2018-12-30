import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: '109500',
    createdAt: 1000,
    note: 'This was last months rent!',
  };
  const action = addExpense(expenseData);
  const expectedResult = {
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  };
  expect(action).toEqual(expectedResult);
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  const expectedResult = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    },
  };
  expect(action).toEqual(expectedResult);
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234', { note: 'No soup for you!' });
  const expectedResult = {
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'No soup for you!',
    },
  };
  expect(action).toEqual(expectedResult);
});

test('should setup remove expense acton object', () => {
  const action = removeExpense({ id: '123' });
  const expectedResult = {
    type: 'REMOVE_EXPENSE',
    id: '123',
  };
  expect(action).toEqual(expectedResult);
});
