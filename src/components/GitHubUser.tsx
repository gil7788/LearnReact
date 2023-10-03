import React from "react";
import FetchGet from "./FetchGet.tsx";
import UserDetails from "./UserDetails.tsx";

interface GitHubUserProps {
  login: string;
}

export default function GitHubUser({ login }: GitHubUserProps) {

  console.log("login:", login);
  const renderSuccess = (data) => {
    console.log("data:", data);
    return (
      <>
        <UserDetails data={data} />
      </>
    );
  }

  return (
    <FetchGet
      url={`https://api.github.com/users/${login}`}
      token=""
      renderSuccess={renderSuccess}
    />
  );
}
