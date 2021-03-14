import { format } from 'date-fns';

export const toShortDateFormat = (date: number) => {
  return format(new Date(date), 'MMM dd');
};

export const toLongDateFormat = (date: string | number) => {
  return format(new Date(date), 'yyyy-MM-dd');
};

export const withCurrencySymbol = (value: number) => `$${value.toFixed(2)}`;
