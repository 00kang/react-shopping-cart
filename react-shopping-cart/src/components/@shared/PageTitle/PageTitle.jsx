import styled from 'styled-components';

import NavigateButton from 'components/@shared/NavigateButton/NavigateButton';

const PageTitle = styled(NavigateButton)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  text-align: center;
  vertical-align: middle;

  & svg {
    width: 35px;
    height: 35px;
  }

  & path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export default PageTitle;
