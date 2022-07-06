import { CONFIG } from "./constants";

const checkResponse = (res) => {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка ${res.status}`);
};

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
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.orders}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  });
  return checkResponse(res);
}

//API for users

export async function userRegistration(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.register}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function userLogin(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function userLogout(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.logout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function resetPasswordRequest(data) {
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

export async function updatePassword(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.passReset}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  return checkResponse(res);
}

export async function getUserData(token) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.user}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return checkResponse(res);
}

export async function getNewToken(data) {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}
