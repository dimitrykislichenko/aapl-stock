import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Chart } from '../components/chart/Chart';
import { useData } from './hooks/useData.hook';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 600px;
  padding: 20px;
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

export const App = () => {
  const data = useData();

  return (
    <>
      <GlobalStyling />
      <Wrapper>
        <Content>
          <Chart data={data} />
        </Content>
      </Wrapper>
    </>
  );
};

export default App;
