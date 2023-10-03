import React from "react";
import FetchGet from "./FetchGet.tsx";
import RepositoryMenu from "./RepositoryMenu.tsx";

interface UserRepositoriesProps {
  login: string;
}

export default function UserRepositories({login}:UserRepositoriesProps) {
  return (
    <FetchGet
            url={`https://api.github.com/users/${login}/repos`}
            token="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"
            renderSuccess={(data) => {
              console.log("data:", data);
              return (
                  <>
                    <p>{JSON.stringify(data[0].name)}</p>
                    <RepositoryMenu repositories={data}/>
                  </>
              );
            }}
          />
  );
}
