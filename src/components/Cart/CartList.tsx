import { ReactComponent as TrashCanIcon } from 'assets/trashCanIcon.svg';
import { CartItem, Item } from 'types/domain';
import styled from 'styled-components';
import CroppedImage from 'components/common/CroppedImage';
import { flexCenter } from 'styles/mixin';
import CheckBox from 'components/common/CheckBox';
import useUpdateCartItem from 'hooks/useUpdateCartItem';
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';
import Controller from './Controller';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getCartList } from 'redux/action-creators/cartListThunk';
import { CartListAction } from 'redux/actions/cartList';

const CartList = ({
  cartList,
  cartDetail,
  cartListWithDetail,
  setPaymentsAmount,
}: {
  cartList: CartItem[];
  cartDetail: Item[];
  cartListWithDetail: any[];
  setPaymentsAmount: Dispatch<SetStateAction<number>>;
}) => {
  const { toggleCartItemWillPurchase } = useUpdateCartItem(cartList);

  const isAllItemWillPurchase = cartList.every(cartItem => cartItem.willPurchase);
  const totalPaymentsPrice = cartListWithDetail.reduce((prev, after) => {
    if (after.willPurchase) {
      return prev + after.price * after.quantity;
    }

    return prev;
  }, 0);

  useEffect(() => {
    setPaymentsAmount(totalPaymentsPrice);
  });

  const toggleCheckedAll = () => {
    if (isAllItemWillPurchase) {
      toggleAll(true);

      return;
    }

    toggleAll(false);
  };

  const toggleAll = (check: boolean) => {
    cartList.forEach(cartItem => {
      if (cartItem.willPurchase === check) {
        toggleCartItemWillPurchase(cartItem.id);
      }
    });
  };

  const toggleChecked = (targetId: number) => {
    toggleCartItemWillPurchase(targetId);
  };

  const { updateCartItemQuantity, removeCartItem } = useUpdateCartItem(cartList);

  const modifyQuantity = (targetId: number, type: 'up' | 'down' | 'alter', quantity: number) => {
    updateCartItemQuantity(targetId, type, 1);
  };

  const deleteItem = (targetId: number) => {
    removeCartItem(targetId);
  };

  return (
    <StyledRoot>
      <ButtonSet>
        <SelectItemAll>
          <CheckBox
            id='전체 선택'
            checked={isAllItemWillPurchase}
            onChange={toggleCheckedAll}
          ></CheckBox>
          <p>선택 해제</p>
        </SelectItemAll>
        <DeleteSelectedButton>상품 삭제</DeleteSelectedButton>
      </ButtonSet>
      <CartItemListHeader>든든상품배송 {`( ${cartList.length} )`}개</CartItemListHeader>
      <CartItemList>
        {cartList.map(cartItem => {
          const id = cartItem.id;
          const detail = cartDetail.filter(item => item.id === id)[0];
          const totalPrice = cartItem.quantity * detail.price;

          return (
            <CartItemContainer key={cartItem.id}>
              <CheckBox
                id={`${cartItem.id}`}
                checked={cartItem.willPurchase}
                onChange={() => toggleChecked(id)}
              ></CheckBox>
              <CroppedImage src={detail.thumbnailUrl} width='150px' height='144px' alt='상품' />
              <ItemName>{detail.title}</ItemName>
              <StyledRight>
                <TrashCan id={cartItem.id} onClick={() => deleteItem(id)} />
                <Controller
                  id={cartItem.id}
                  quantity={cartItem.quantity}
                  modifyQuantity={modifyQuantity}
                ></Controller>
                <TotalPrice>
                  {totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 원
                </TotalPrice>
              </StyledRight>
            </CartItemContainer>
          );
        })}
      </CartItemList>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  grid-area: cl;
  display: inline-block;
  width: 736px;
  height: 724px;
`;

const ButtonSet = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

const DeleteSelectedButton = styled.button`
  ${flexCenter}
  width: 117px;
  height: 50px;
  border: solid silver 1px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  text-align: center;
`;

const SelectItemAll = styled.div`
  display: flex;
  font-size: 20px;
  width: 135px;

  justify-content: space-between;
`;

const CartItemListHeader = styled.p`
  padding: 5px 0px;

  border-bottom: solid silver 4px;
  font-size: 20px;
`;

const CartItemList = styled.div`
  width: 736px;
  height: 700px;
  overflow: auto;

  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background-color: inherit;
  }
  &::-webkit-scrollbar-track {
    background-color: inherit;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  border-bottom: solid silver 1.5px;
  padding: 20px 0;
`;

const ItemName = styled.div`
  width: 260px;
  padding: 0px 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  align-items: flex-end;
  width: 200px;
`;

const TrashCan = styled(TrashCanIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TotalPrice = styled.p`
  font-size: 16px;
`;

export default CartList;
