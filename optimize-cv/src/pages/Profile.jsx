import "../styles/Profile.css";

import { useState, useEffect } from "react";

function Profile() {
  // Initializing a state variable 'user' with a default value of 'null'
  const [user, setUser] = useState(null);
  // Function to fetch the user's GitHub profile data
  const getUser = async () => {
    // const res = await fetch("https://api.github.com/users/github-john-doe");

    // Define the GitHub API token (for authentication) and the username of the user to be fetched
    const token = process.env.REACT_APP_API_KEY;
    const username = "desteur1";

    // Fetch the user's profile data from GitHub's API with the token for authorization

    const response = await fetch(`https://api.github.com/users/${username}`, {
      Authorization: `token ${token}`,
    });
    // Handle error if the response is not successful
    if (!response.ok) throw new Error("Network response was not ok");
    // Parse the JSON response and update the 'user' state with the profile data
    const json = await response.json();
    setUser(json);
  };
  // useEffect hook to trigger the 'getUser' function once the component mounts
  useEffect(() => {
    getUser();
  }, []);
  // Display a loading message while the user data is being fetched
  if (!user) return <div>Loading...</div>;
  // Log the user data to the console for debugging purposes
  console.log(user);
  // Render the user's profile information
  return (
    <div className="user-container">
      <header>
        <h1 className="profile-title">Desteur Fall Github's Profile</h1>
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
