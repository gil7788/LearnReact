import React from "react";
import useFetch from "./hooks/FetchHook.tsx"; // Import the useFetch hook

interface FetchPostProps {
  url: string;
  method: "POST" | "PUT" | "PATCH" | "DELETE"; // Specify the HTTP method
  body: any; // Request body
  token?: string; // GitHub token (optional)
  renderSuccess: (data: any) => React.ReactNode;
  renderError?: (error: any) => React.ReactNode;
  renderLoading?: () => React.ReactNode;
}

const FetchPost: React.FC<FetchPostProps> = ({
  url,
  method,
  body,
  token,
  renderSuccess,
  renderError,
  renderLoading,
}) => {
    const headers = {
        "Content-Type": "application/json", // You can adjust the content type as needed
    }

  // Include the token in the request headers if provided
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const { loading, data, error } = useFetch({url, method:"POST", headers});

  console.log("data:", data);
  console.log("error:", error);
  console.log("loading:", loading);


  if (loading) return renderLoading ? renderLoading() : <p>Loading...</p>;
  if (error)
    return renderError ? (
      renderError(error)
    ) : (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );
  if (data) return renderSuccess(data);

  return null;
};

export default FetchPost;
