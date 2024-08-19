import "../styles/Profile.css";

import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");

    if (!res.ok) throw new Error("Network response was not ok");
    const json = await res.json();
    setUser(json);
  };
  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <div>Loading...</div>;
  console.log(user);

  return (
    <div className="user-container">
      <header>
        <h1 className="profile-title">John Doe Github's Profile</h1>
      </header>
      <main>
        <article key={user.id}>
          <h2 className="profile-login">{user.login}</h2>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="profile-avatar"
          />

          <p className="profile-boi">{user.bio}</p>
          <p>Abonnés : {user.followers}</p>
          <p>Abonnement : {user.following}</p>
          <p>Crée le : {user.created_at}</p>
          <p>Modifié le : {user.updated_at}</p>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              URL repository :{" "}
              <span className="profile-repo">{user.html_url}</span>
            </a>
          </p>
        </article>
      </main>
    </div>
  );
}

export default Profile;
