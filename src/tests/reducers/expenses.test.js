import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Candybar',
    note: '',
    amount: 150,
    createdAt: 2500,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expense]);
});

test('should edit an expense by id', () => {
  const note = 'I bought a snickers.';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note,
    },
  };
  const updatedExpense = {
    id: '1',
    description: 'Gum',
    note,
    amount: 150,
    createdAt: 0,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note);
  expect(state).toEqual([updatedExpense, expenses[1], expenses[2]]);
});

test('should edit an expense by id', () => {
  const note = 'I bought a snickers.';
  const updates = { note };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toEqual(note);
});

test('should not edit an expense if expense is not found', () => {
  const amount = 200000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
