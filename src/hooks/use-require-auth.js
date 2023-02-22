import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";
const useRequireAuth = (redirectUrl = "/signup") => {
  const auth = useLocalStorage("auth");

  useEffect(() => {
    if (auth === null) {
      return redirectUrl;
    }
  }, [auth]);
  return auth;
};

export default useRequireAuth;
