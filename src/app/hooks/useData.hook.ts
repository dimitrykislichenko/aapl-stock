import { useMemo } from 'react';
import { getYear } from '../../api/api';

/**
 * Returns normalized dataset for specified date range
 */
export const useData = () => {
  return useMemo(() => {
    const raw = getYear();
    return raw.map((item) => ({
      ...item,
      Value: item.Close,
    }));
  }, []);
};
