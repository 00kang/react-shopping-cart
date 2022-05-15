import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'component/common';

const ProductBox = styled.div`
  width: 282px;
  height: 358px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ProductImage = styled.img`
  width: 282px;
  height: 282px;
  object-fit: cover;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

const NameText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #333333;
`;

const PriceText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #333333;
`;

function Product({ image, name, price }) {
  return (
    <ProductBox>
      <ProductImage src={image} alt="과일 이미지" title="product-image" />
      <DescriptionBox>
        <div>
          <NameText>{name}</NameText>
          <PriceText>{price.toLocaleString('ko-KR')} 원</PriceText>
        </div>
        <Button>
          <span style={{ fontSize: '25px' }}>🛒</span>
        </Button>
      </DescriptionBox>
    </ProductBox>
  );
}

Product.defaultProps = {
  image: '',
  name: '과일',
  price: 0,
};

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
