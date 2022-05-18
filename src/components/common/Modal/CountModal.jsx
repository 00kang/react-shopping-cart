import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DownCountButton, UpCountButton } from '../Styled';

const Styled = {
  CounterBox: styled.div`
    display: flex;
    margin-top: 50px;
  `,
  CounterShowBox: styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: 400;
    justify-content: center;
    padding-top: 15px;
    border: 1px solid #dddddd;
  `,
  UpDownButtonBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

const CountModal = () => {
  return (
    <Styled.CounterBox>
      <Styled.CounterShowBox>123</Styled.CounterShowBox>
      <Styled.UpDownButtonBox>
        <UpCountButton>▴</UpCountButton>
        <DownCountButton>▴</DownCountButton>
      </Styled.UpDownButtonBox>
    </Styled.CounterBox>
  );
};

CountModal.propTypes = {
  totalCount: PropTypes.number,
};

export default CountModal;
