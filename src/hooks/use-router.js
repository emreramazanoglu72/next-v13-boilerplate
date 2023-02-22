import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const useRouterHook = () => {
  const router = useRouter();
  const params = useSearchParams();
  const location = usePathname();
  return useMemo(() => {
    return {
      push: router.push,
      replace: router.replace,
      pathname: location.pathname,
      query: {
        ...params
      },
      location
    };
  }, [params, router, location]);
};

export default useRouterHook;
