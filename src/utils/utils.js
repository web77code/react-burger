export const checkResponse = (res) => {
  if (res.ok) 
    return res.json();

  return Promise.reject(`Ошибка ${res.status}`);
}

export const logErrorToConsole = (err) => {
  if (!err.json) {
    console.error(err);
  } else {
    err.json().then((err) => {
      console.error(err.message);
    });
  }
}

export const buildAuthObject = (data) => {
  return {
    user: data.user,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
}
