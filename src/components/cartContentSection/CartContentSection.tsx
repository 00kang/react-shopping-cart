import { CART, INFO_MESSAGES } from "../../constants";
import { CartItemCardList } from "../cartItemCardList/CartItemCardList";
import { CartSummary } from "../cartSummary/cartSummary/CartSummary";
import {
  StyledCartContentSection,
  StyledContentContainer,
  StyledEmptyCartItemCard,
} from "./CartContentSection.styled";

export const CartContentSection: React.FC<{ categoryCount: number }> = ({ categoryCount }) => {
  return (
    <StyledCartContentSection>
      {categoryCount > CART.EMPTY_THRESHOLD ? (
        <StyledContentContainer>
          <CartItemCardList />
          <CartSummary />
        </StyledContentContainer>
      ) : (
        <StyledEmptyCartItemCard>{INFO_MESSAGES.EMPTY_CART}</StyledEmptyCartItemCard>
      )}
    </StyledCartContentSection>
  );
};
