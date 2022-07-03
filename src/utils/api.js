import { CONFIG } from './constants';

const checkResponse = (res) => {
  if (res.ok) 
    return res.json();

  return Promise.reject(`Ошибка ${res.status}`);
}

//API for ingredietns

export async function getIngredients() {
  const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.INGREDIENTS}`, { 
    headers: CONFIG.HEADERS 
  });
  return checkResponse(res);
}

//API for orders

export async function sendOrder(data) {
  const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.ORDERS}`, {
    method: 'POST',
    headers: CONFIG.HEADERS,
    body: JSON.stringify({
      ingredients: data,
    }),
  });
  return checkResponse(res);
}

//API for users

export async function userRegistration(data) {
  const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.register}`, {
    method: "POST",
    headers: CONFIG.HEADERS,
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function userLogin(data) {
  const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.login}`, {
    method: "POST",
    headers: CONFIG.HEADERS,
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}

export async function userLogout(data) {
  const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.logout}`, {
    method: "POST",
    headers: CONFIG.HEADERS,
    body: JSON.stringify(data),
  })
  return checkResponse(res);
}
