import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Chart } from '../components/chart/Chart';
import { GlobalStyling } from './GlobalStyling';
import { ERange, useData } from './hooks/useData.hook';
import { RangeButtons } from './RangeButtons';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 122, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Content = styled.div`
  position: relative;
  height: 600px;
  flex: 1 1 auto;
`;

export const App = () => {
  const { range, setRange, data } = useData(ERange.MAX);

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
          <RangeButtons active={range} onChange={_onChangeRange} />
          <Chart header="AAPL Stocks" data={data} />
        </Content>
      </Wrapper>
    </>
  );
};

export default App;
