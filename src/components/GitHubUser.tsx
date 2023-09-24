import React from "react";
import Fetch from "./Fetch.tsx";

interface GitHubUserProps {
    login: string;
}

const GitHubUser: React.FC<GitHubUserProps> = ({ login }) => {
    const renderSuccess = (data: any) => (
        <div className="githubUser">
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt={data.login} style={{ width: 100 }} />
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
        </div>
    );

    return <Fetch url={`https://api.github.com/users/${login}`} renderSuccess={renderSuccess} />;
};

export default GitHubUser;
