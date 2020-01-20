export const isLocalMode = process.env.NODE_ENV === 'development';
export const API_ROOT = isLocalMode
  ? 'http://localhost:5000/api/'
  : 'https://google/api/';
