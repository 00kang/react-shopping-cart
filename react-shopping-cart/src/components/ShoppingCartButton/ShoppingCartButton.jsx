import styled from 'styled-components';

import Button from 'components/@shared/Button/Button';

const ShoppingCartButton = styled(Button)`
  width: 425px;
  height: 65px;
  font-size: 21px;
  background-color: ${({ $isincart, theme }) =>
    $isincart ? theme.colors.red_01 : theme.colors.brown_09};
`;

export default ShoppingCartButton;
