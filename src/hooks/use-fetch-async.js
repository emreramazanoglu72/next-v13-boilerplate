import { useCallback, useEffect, useState } from "react";

const useFetchAsync = (url, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setResponse(null);
    setError(null);
    return fetch(url)
      .then((_response) => _response.json())
      .then((_response) => {
        setResponse(_response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [url]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, response, error };
};

export default useFetchAsync;
