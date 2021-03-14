import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

interface IButton {
  name: string | number;
  label: string;
}

interface IGroupButtonsProps {
  className?: string;
  active?: string | number;
  buttons: IButton[];
  onChange: (button: IButton) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${Button}:nth-child(n+2) {
    margin-left: 4px;
  }
`;

export const GroupButtons = ({
  className,
  active,
  buttons,
  onChange,
}: IGroupButtonsProps) => {
  return (
    <Wrapper className={className}>
      {buttons.map((button) => (
        <Button
          key={button.name}
          active={button.name === active}
          onClick={() => onChange(button)}
        >
          {button.label}
        </Button>
      ))}
    </Wrapper>
  );
};
