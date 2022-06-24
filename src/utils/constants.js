export const CONFIG = {
  BASE_URL: 'https://norma.nomoreparties.space/api',
  HEADERS: {
    'Content-Type': 'application/json'
  },
  END_POINTS: {
    INGREDIENTS: 'ingredients',
    ORDERS: 'orders',
    register: 'auth/register',
    login: 'auth/login',
    logout: 'auth/logout',
    token: 'auth/token',
  }
}

export const BASIC_TYPES = {
  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы'
}
