import * as Styled from "./styles";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderTitle>
        <img alt="Logo" src={Logo} />
        <div>WOOWA SHOP</div>
      </Styled.HeaderTitle>
      <Styled.HeaderMenu>
        <div>장바구니</div>
        <div>주문목록</div>
      </Styled.HeaderMenu>
    </Styled.HeaderWrapper>
  );
}

export default Header;
