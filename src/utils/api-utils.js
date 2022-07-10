import { CONFIG } from "./constants";
import { getCookie, setCookie } from "./cookies";

export const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export async function fetchWithRefresh(url, opts) {
  if (!getCookie("token") && localStorage.getItem("refreshToken") === null) {
    return Promise.reject("401 Unauthorized");
  }

  if (!getCookie("token")) {
    const refreshResult = await getNewToken();

    if (!refreshResult.success) {
      return Promise.reject(refreshResult);
    }

    localStorage.setItem("refreshToken", refreshResult.refreshToken);
    setCookie("token", refreshResult.accessToken.split("Bearer ")[1]);
    // Спорная логика, подумать как переделать красивее
    opts.headers.Authorization = refreshResult.accessToken;
  }

  try {
    const res = await fetch(url, opts);
    const data = await checkResponse(res);
    return data;
  } catch (err) {
    const checkError = await err.json();
    if (checkError.message === "jwt expired") {
      // Дублирование логики
      const refreshResult = await getNewToken();

      if (!refreshResult.success) {
        return Promise.reject(refreshResult);
      }

      localStorage.setItem("refreshToken", refreshResult.refreshToken);
      setCookie("token", refreshResult.accessToken.split("Bearer ")[1]);

      // Спорная логика, подумать как переделать красивее
      opts.headers.Authorization = refreshResult.accessToken;
      const res = await fetch(url, opts);
      const data = await checkResponse(res);

      return data;
    } else {
      return Promise.reject(err);
    }
  }
}

async function getNewToken() {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });

  return checkResponse(res);
}
