const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateService = {
  getMonthFromDate: (date: Date): number => date.getMonth() + 1,

  getYearFromDate: (date: Date): number => date.getFullYear(),

  isSameMonthAndYear: (date1: Date, date2: Date): boolean =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth(),

  parseMonthYearToDate: (monthYear: string): Date => {
    const [month, year] = monthYear.split('-');
    const monthIndex = parseInt(month) - 1;
    return new Date(Number(year), monthIndex, 1);
  },

  formatDateToFullMonthYear: (date: Date): string => {
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  },

  formatDateToShortMonthYear: (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}`;
  },

  formatDateToShortDate: (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  },
};
