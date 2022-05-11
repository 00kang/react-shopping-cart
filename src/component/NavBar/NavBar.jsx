import styled from 'styled-components';
import Button from '../common/Button/Button';

const StyledNavBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 12px 300px;
  background-color: #2ac1bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const LogoText = styled.span`
  font-family: 'Noto Sans KR';
  font-weight: 900;
  font-size: 40px;
  color: #ffffff;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 44px;
`;

const MenuText = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <Button>
        <LogoText>🛒 WOOWA SHOP</LogoText>
      </Button>
      <MenuContainer>
        <Button>
          <MenuText>장바구니</MenuText>
        </Button>
        <Button>
          <MenuText>주문목록</MenuText>
        </Button>
      </MenuContainer>
    </StyledNavBar>
  );
}

export default NavBar;
