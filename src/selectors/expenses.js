import moment from 'moment';

// Get visible expenses
const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      // Sort by most recent date first.
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
        // Sort by largest amount first.
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
      return 0;
    });
};

export default selectExpenses;
