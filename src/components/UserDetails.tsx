import UserRepositories from "./UserRepositories.tsx";
import React from "react";

export default function UserDetails({data}) {
   return (
    <div className="githubUser">
      <p>UserDetails</p>
      <>
          <img
            src={data.avatar_url}
            alt={data.login}
            style={{ width: 100 }}
          />
          <div>
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
          </div>
          <UserRepositories login={data.login}
            />
      </>
    </div>
  );
}
