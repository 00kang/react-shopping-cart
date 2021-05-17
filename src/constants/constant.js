export const ROUTE = {
  HOME: "/",
  CART: "/cart",
  PAYMENT: "/payment",
  ORDERS_LIST: "/orders-list",
};

export const MESSAGE = {
  CONFIRM: {
    DELETE_PRODUCTS_FROM_CART: "선택한 상품들을 장바구니에서 제거하시겠습니까?",
  },
  ALERT: {
    INVALID_APPROACH: "비정상적인 접근입니다",
    FAILED_GET_PRODUCT_LIST:
      "상품목록을 불러오는데 실패했습니다...! \n오류가 지속되면 관리자에게 문의하세요",
    FAILED_GET_CARTS:
      "장바구니를 불러오는데 실패했습니다...! \n오류가 지속되면 관리자에게 문의하세요",
    FAILED_ADD_TO_CART:
      "상품을 장바구니에 추가하는데 실패했습니다...! \n오류가 지속되면 관리자에게 문의하세요",
  },
};

export const CART = {
  ADD_DIFF: 1,
  MIN_AMOUNT: 1,
  MAX_AMOUNT: 99,
};

export const IMAGE = {
  EMPTY:
    "https://firebasestorage.googleapis.com/v0/b/payment-react-ca0a5.appspot.com/o/empty.png?alt=media&token=b0847dcc-5151-4237-8423-8d352e6315f5",
};

const BACKEND_URL = "https://shopping-cart.techcourse.co.kr";
const USER_NAME = "hchayan";

export const API = {
  GET_PRODUCTS: `${BACKEND_URL}/api/products`,
  GET_CARTS: `${BACKEND_URL}/api/customers/${USER_NAME}/carts`,
  ADD_TO_CART: `${BACKEND_URL}/api/customers/${USER_NAME}/carts`,
};
