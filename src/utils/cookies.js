const setCookie = (name, value) => document.cookie = `${name}=${value}; path=/`;

const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const removeCookie = (name) => document.cookie = `${name}=;expires=${new Date(0)}; path=/`;

export { setCookie, getCookie, removeCookie };
