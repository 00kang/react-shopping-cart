import styled from "@emotion/styled";
import { noneStyles } from "@/styled";

const StyledLogoLink = styled.div`
  .logo-link {
    ${noneStyles.a}
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    color: #ffffff;
    font-size: 30px;
    font-weight: 900;
    margin-left: 20px;
  }
`;

export default StyledLogoLink;
