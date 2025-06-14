import { useLocation } from "react-router-dom";

export const useQueryParam = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};
