import { CONFIG } from "./constants";
import { getCookie, setCookie } from "./cookies";

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

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
  console.log(JSON.stringify({ ...data }));
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

async function fetchWithRefresh(url, opts) {
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
