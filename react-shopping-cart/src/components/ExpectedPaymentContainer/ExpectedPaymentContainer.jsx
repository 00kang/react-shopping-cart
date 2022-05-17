import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ExpectedPaymentBottomContainer from 'components/ExpectedPaymentBottomContainer/ExpectedPaymentBottomContainer';
import ExpectedPaymentBox from 'components/ExpectedPaymentBox/ExpectedPaymentBox';
import ExpectedPaymentTopContainer from 'components/ExpectedPaymentTopContainer/ExpectedPaymentTopContainer';
import OrderButton from 'components/OrderButton/OrderButton';

import { selectCurrentCarts } from 'redux/carts/carts.selector';

import { CURRENT_USER } from 'constants';

const ExpectedPaymentWrapper = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors['gray_04']};
`;

function ExpectedPaymentContainer() {
  const carts = useSelector(selectCurrentCarts);

  const totalPaymentCost = carts.reduce((acc, cart) => {
    if (cart.user === CURRENT_USER && cart.checked) {
      return acc + Number(cart.price) * Number(cart.quantity);
    }
    return acc;
  }, 0);

  const totalOrderProductsQuantity = carts.reduce((acc, cart) => {
    if (cart.user === CURRENT_USER && cart.checked) {
      return acc + Number(cart.quantity);
    }
    return acc;
  }, 0);

  return (
    <ExpectedPaymentWrapper>
      <ExpectedPaymentTopContainer>결제예상금액</ExpectedPaymentTopContainer>
      <ExpectedPaymentBottomContainer>
        <ExpectedPaymentBox price={totalPaymentCost} />
        <OrderButton>{`주문하기(${totalOrderProductsQuantity}개)`}</OrderButton>
      </ExpectedPaymentBottomContainer>
    </ExpectedPaymentWrapper>
  );
}

export default ExpectedPaymentContainer;
