import React, { useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GroupButtons } from '../components/buttons/GroupButton';
import { Chart } from '../components/chart/Chart';
import { ERange, useData } from './hooks/useData.hook';

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  height: 600px;
  flex: 1 1 auto;
`;

const GlobalStyling = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: #000000;
    font-family: Arial;
  }
`;

const StyledGroupButtons = styled(GroupButtons)`
  position: absolute;
  bottom: 45px;
  left: 10px;
  z-index: 10;
`;

export const App = () => {
  const { range, setRange, data } = useData();

  const _onChangeRange = useCallback(
    (value) => {
      setRange(value.name);
    },
    [setRange]
  );

  return (
    <>
      <GlobalStyling />
      <Wrapper>
        <Content>
          <StyledGroupButtons
            active={range}
            buttons={RANGE_OPTIONS}
            onChange={_onChangeRange}
          />
          <Chart header="AAPL Stocks" data={data} />
        </Content>
      </Wrapper>
    </>
  );
};

export default App;
