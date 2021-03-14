import styled from 'styled-components';

export const Button = styled.div<{ active: boolean }>`
  flex: 0 0 auto;
  cursor: pointer;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid rgb(86, 90, 105);
  color: rgb(250, 250, 250);
  text-align: center;
  ${({ active }) =>
    active &&
    `
      background-color: rgb(64, 68, 79);
    `}
`;
