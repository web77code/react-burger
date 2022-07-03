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
