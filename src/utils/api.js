import { CONFIG } from './constants';

const checkResponse = (res) => {
  if (res.ok) 
    return res.json();

  return Promise.reject(`Ошибка ${res.status}`);
}

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
