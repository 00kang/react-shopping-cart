import { useRecoilValue } from "recoil";
import { useTotalDiscount } from "../../../hooks/useTotalDiscount";
import { cartSummarySelectorState } from "../../../recoil/selector/selector";
import { formatPriceWithZero } from "../../../utils/formatPrice";
import BaseSummary from "../baseSummary/BaseSummary";

export const OrderSummary: React.FC = () => {
  const { orderPrice, orderDeliveryPrice, orderTotalPrice } =
    useRecoilValue(cartSummarySelectorState);
  const totalDiscountPrice = useTotalDiscount();
  const formattedTotalDiscountPrice = formatPriceWithZero(totalDiscountPrice);

  return (
    <div style={{ width: "100%" }}>
      <BaseSummary
        showCouponDiscount={true}
        couponDiscountPrice={Number(formattedTotalDiscountPrice)}
        orderPrice={orderPrice}
        deliveryPrice={orderDeliveryPrice}
        totalPrice={orderTotalPrice}
      />
    </div>
  );
};
