export const PATH = {
  ROOT: "/",
  PRODUCT_LIST: "/product-list",
  PRODUCT_DETAIL_WITH_ID: (id) => `/product-detail/${id}`,
  CART: "/cart",
  ORDER_LIST: "/order-list",
};

export const API_SERVER = {
  BASE_URL: "https://react-shoppingcart-server.herokuapp.com",
  PATH: {
    PRODUCT_LIST: "/products",
    CART: "/cart",
  },
};

export const PRODUCT_QUANTITY_CONDITION = {
  MIN: 1,
  MAX: 20,
  STEP: 1,
};
