import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequestData = (url, headers) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, headers)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
}

export default useRequestData;