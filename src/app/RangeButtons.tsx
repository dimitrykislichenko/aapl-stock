import styled from 'styled-components';
import { GroupButtons, IButton } from '../components/buttons/GroupButton';
import { ERange } from './hooks/useData.hook';

const RANGE_OPTIONS = [
  {
    name: ERange.WEEK,
    label: 'Week',
  },
  {
    name: ERange.MONTH,
    label: 'Month',
  },
  {
    name: ERange.QUARTER,
    label: 'Quarter',
  },
  {
    name: ERange.YEAR,
    label: 'Year',
  },
  {
    name: ERange.MAX,
    label: 'Max',
  },
];

interface IRangeButtonsProps {
  active?: string | number;
  onChange: (button: IButton) => void;
}

const StyledGroupButtons = styled(GroupButtons)`
  position: absolute;
  bottom: 45px;
  left: 10px;
  z-index: 10;
`;

export const RangeButtons = ({ active, onChange }: IRangeButtonsProps) => (
  <StyledGroupButtons
    active={active}
    onChange={onChange}
    buttons={RANGE_OPTIONS}
  />
);
