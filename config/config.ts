
export const port = process.env.PORT ?? 3000;
export const host = process.env.HOSTNAME_URL
  ? `https://${process.env.HOSTNAME_URL}`
  : `http://localhost:${port}`;
