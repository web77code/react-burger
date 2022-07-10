import { CONFIG } from "./constants";
import { getCookie } from "./cookies";
import { checkResponse, fetchWithRefresh } from "./api-utils";

//API for ingredietns

export async function getIngredients() {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.ingredients}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(res);
}

//API for orders

export async function sendOrder(data) {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.orders}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    }
  );

  return res;
}

//API for users

export async function createUserAccount(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.register}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function loginToAccount(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function logoutFromAccount(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.logout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function resetUserPassword(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.passForgot}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data,
    }),
  });
  return checkResponse(res);
}

export async function updateUserPassword(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.passReset}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  return checkResponse(res);
}

export async function getUserData() {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.user}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }
  );

  return res;
}

export async function updateUserData(data) {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.user}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({ ...data }),
    }
  );

  return res;
}
