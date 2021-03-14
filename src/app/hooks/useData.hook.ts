import { useMemo, useState } from 'react';
import {
  getData,
  getMonth,
  getQuarter,
  getWeek,
  getYear,
  IData,
} from '../../api/api';

export enum ERange {
  WEEK,
  MONTH,
  QUARTER,
  YEAR,
  MAX,
}

const getRangeData = (range: ERange): IData[] => {
  switch (range) {
    case ERange.WEEK:
      return getWeek();
    case ERange.MONTH:
      return getMonth();
    case ERange.QUARTER:
      return getQuarter();
    case ERange.YEAR:
      return getYear();
    case ERange.MAX:
    default:
      return getData();
  }
};

/**
 * Returns normalized dataset for specified date range
 */
export const useData = () => {
  const [range, setRange] = useState(ERange.WEEK);

  const data = useMemo(() => {
    const raw = getRangeData(range);
    return raw.map((item) => ({
      ...item,
      Value: item.Close,
    }));
  }, [range]);

  return { range, setRange, data };
};
