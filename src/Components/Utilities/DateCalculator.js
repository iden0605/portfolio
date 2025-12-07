export const calculateMonthsInRole = (dateString) => {
  const [startDateStr, endDateStr] = dateString.split(' - ');

  const parseDate = (datePart) => {
    const [monthStr, yearStr] = datePart.split(' ');
    const month = new Date(Date.parse(monthStr + " 1, 2000")).getMonth();
    const year = parseInt(yearStr, 10);
    return new Date(year, month);
  };

  const startDate = parseDate(startDateStr);
  let endDate;
  let isOngoing = false;

  if (endDateStr === 'Present') {
    endDate = new Date();
    isOngoing = true;
  } else {
    endDate = parseDate(endDateStr);
  }

  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;

  return { months, isOngoing };
};
