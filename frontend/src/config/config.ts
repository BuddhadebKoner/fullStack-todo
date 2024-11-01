export const config = {
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};