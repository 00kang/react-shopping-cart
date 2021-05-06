import PropTypes from 'prop-types';
import React from 'react';
import PALETTE from '../../../constants/palette';
import Button from '../../common/Button';
import FlexContainer from '../../common/FlexContainer';
import HighlightText from '../../common/HighlightText';
import { UNIT } from '../../../constants/appInfo';
import * as Styled from './style';

const PriceInfoBox = ({ width, margin, title, priceInfo, submitText }) => {
  return (
    <FlexContainer width={width} margin={margin} direction={'column'} border={`1px solid ${PALETTE.GRAY_004}`}>
      <Styled.PriceInfoTitle>{title}</Styled.PriceInfoTitle>
      <FlexContainer direction={'column'} padding={'1.8rem 1.4rem'}>
        <FlexContainer justifyContent={'space-between'} margin={submitText && '0 0 3rem 0'}>
          <HighlightText highlightColor={PALETTE.BAEMINT_TRANSPARENT_001}>{priceInfo.name}</HighlightText>
          <HighlightText highlightColor={PALETTE.BAEMINT_TRANSPARENT_001}>{`${priceInfo.price.toLocaleString()} ${
            UNIT.MONEY
          }`}</HighlightText>
        </FlexContainer>
        {submitText && (
          <Button
            width={'100%'}
            height={'4.5rem'}
            backgroundColor={PALETTE.BAEMINT}
            color={PALETTE.WHITE}
            fontSize={'1.3rem'}
          >
            {submitText}
          </Button>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

PriceInfoBox.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
  title: PropTypes.string,
  priceInfo: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  submitText: PropTypes.string,
};

export default PriceInfoBox;
