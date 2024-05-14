import { CartItem, CartItemCounts } from "../types";
import { generateBasicToken } from "../utils/auth";

const API_URL = "http://54.180.95.212:8080";
const USER_ID = import.meta.env.VITE_USER_ID;
const USER_PASSWORD = import.meta.env.VITE_USER_PASSWORD;

// GET : /cart-items 사용자의 장바구니 목록 조회
export async function fetchCartItems(): Promise<CartItem[]> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/cart-items`, {
    method: "GET",
    headers: { Authorization: token },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart items");
  }

  const data = await response.json();
  return data.content;
}

// GET : /cart-items/counts 장바구니 아이템 수량 조회
export async function fetchCartItemCounts(): Promise<CartItemCounts> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/cart-items/counts`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart item counts");
  }

  const data = await response.json();
  return data;
}
