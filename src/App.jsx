import { useState } from "react";
import { useUserInfo } from "./hooks/useUserInfo.js";

function App() {
  const [userInput, setUserInput] = useState("");
  const [userId, setUserId] = useState(null);
  const { userInfo, loading, error } = useUserInfo(userId);

  return (
    <>
      <h2>GitHub User Info</h2>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        disabled={loading || !userInput.trim()}
        onClick={() => {
          setUserId(userInput.trim());
          setUserInput("");
        }}
      >
        Get user info
      </button>
      {userInfo && (
        <>
          <h4>
            {userInfo.name} (@{userInfo.login})
          </h4>
          <img
            src={userInfo.avatar_url}
            alt={userInfo.login}
            width={100}
            height={100}
          />
          <dl>
            <dt>Location</dt>
            <dd>{userInfo.location}</dd>
            <dt>Repositories</dt>
            <dd>{userInfo.public_repos}</dd>
          </dl>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {loading && <p>Loading...</p>}
    </>
  );
}

export default App;
