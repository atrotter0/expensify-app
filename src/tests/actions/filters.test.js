import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter action object with provided text', () => {
  const result = setTextFilter('Dragons');
  const expectedResult = {
    type: 'SET_TEXT_FILTER',
    text: 'Dragons',
  };
  expect(result).toEqual(expectedResult);
});

test('should generate set text filter action object with default value', () => {
  const result = setTextFilter();
  const expectedResult = {
    type: 'SET_TEXT_FILTER',
    text: '',
  };
  expect(result).toEqual(expectedResult);
});

test('should generate sort by amount action object', () => {
  const result = sortByAmount();
  expect(result).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date action object', () => {
  const result = sortByDate();
  expect(result).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  const expectedResult = {
    type: 'SET_START_DATE',
    startDate: moment(0),
  };
  expect(action).toEqual(expectedResult);
});

test('should generate set start date action object', () => {
  const action = setEndDate(moment(0));
  const expectedResult = {
    type: 'SET_END_DATE',
    endDate: moment(0),
  };
  expect(action).toEqual(expectedResult);
});
