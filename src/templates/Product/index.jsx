import React from 'react';

import BlackText from 'components/BlackText';
import Image from 'components/Image';
import FlexSpaceBetweenCenter from 'components/FlexWrapper/FlexSpaceBetweenCenter';
import MarginBottomWrapper from 'components/MarginBottomWrapper';

import CartButton from 'containers/CartButton';
import ProductTitle from 'containers/ProductTitle';

import ProductStyled from './style';

function Product({ imgSrc, title, price }) {
  const handleProductIamgeClick = () => {};

  return (
    <ProductStyled>
      <MarginBottomWrapper marginBottom="18px">
        <Image onClick={handleProductIamgeClick} src={imgSrc} width="100%" height="14.24vmax" />
      </MarginBottomWrapper>
      <FlexSpaceBetweenCenter>
        <div>
          <MarginBottomWrapper marginBottom="6px">
            <ProductTitle>{title}</ProductTitle>
          </MarginBottomWrapper>
          <BlackText fontSize="1.25rem" fontWeight="400">
            {price.toLocaleString()}원
          </BlackText>
        </div>
        <CartButton />
      </FlexSpaceBetweenCenter>
    </ProductStyled>
  );
}

export default Product;
