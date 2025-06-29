import { useEffect, useState } from "react";

const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(url, option)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => setError(error));
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
