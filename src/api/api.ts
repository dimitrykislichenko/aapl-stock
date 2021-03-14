import { add, Interval, isWithinInterval } from 'date-fns';
import data from '../data/aapl';

export interface IData {
  Date: number;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  OpenInt: number;
}

// Last date of current dataset
export const lastData = new Date(data[data.length - 1].Date);

/**
 * Fetch all available data
 */
export const getData = (): IData[] => data;

/**
 * Fetch data for specified date interval
 */
export const getByRange = (interval: Interval) => {
  return data.filter((item) => isWithinInterval(new Date(item.Date), interval));
};

/**
 * Fetch data for last week
 */
export const getWeek = () => {
  return getByRange({
    start: add(lastData, { weeks: -1 }),
    end: lastData,
  });
};

/**
 * Fetch data for last month
 */
export const getMonth = () => {
  return getByRange({
    start: add(lastData, { months: -1 }),
    end: lastData,
  });
};

/**
 * Fetch data for last quarter
 */
export const getQuarter = () => {
  return getByRange({
    start: add(lastData, { months: -4 }),
    end: lastData,
  });
};

/**
 * Fetch data for last year
 */
export const getYear = () => {
  return getByRange({
    start: add(lastData, { years: -1 }),
    end: lastData,
  });
};
