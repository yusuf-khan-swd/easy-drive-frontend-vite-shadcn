export const getBaseUrl = (): string => {
  return import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://easydrive-backend.vercel.app/api";
};
