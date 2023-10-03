import { useState, useEffect } from "react";

interface FetchData {
  loading: boolean;
  data: any;
  error: any;
}

interface UseFetchProps {
  url: string;
  method?: string;
  headers?: HeadersInit // Optional method for requests
  body?: any; // Optional request body for POST requests
}

const useFetch = ({ url, method = "GET", headers, body }: UseFetchProps): FetchData => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const requestOptions: RequestInit = {
      method, // Set the HTTP method (default: GET)
      headers,
    };

    if (method === "POST" && body) {
      requestOptions.body = JSON.stringify(body);
    }

    //  print fetch request to console
    console.log("url:", url);
    console.log("requestOptions:", requestOptions);
    fetch(url, requestOptions)
      .then((response) => {
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, body]);

  return { loading, data, error };
};

export default useFetch;
