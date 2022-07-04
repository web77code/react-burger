export const CONFIG = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  },
  points: {
    ingredients: 'ingredients',
    orders: 'orders',
    register: 'auth/register',
    login: 'auth/login',
    logout: 'auth/logout',
    token: 'auth/token',
    user: 'auth/user',    
    passForgot: 'password-reset',
    passReset: 'password-reset/reset',
  }
}

export const BASIC_TYPES = {
  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы'
}
