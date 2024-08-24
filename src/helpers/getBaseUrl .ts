export const getBaseUrl = (): string => {
  return import.meta.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://easydrive-backend.vercel.app/api";
};
