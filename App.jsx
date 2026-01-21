import { useState } from "react";
import { signup, login, logout } from "./api/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    try {
      const res = await signup(email, password);
      setUser(res.user);
      alert("Signup successful 🎉");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      setUser(res.user);
      alert("Login successful ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    alert("Logged out 👋");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Firebase Authentication</h2>

      {!user ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={handleSignup}>Signup</button>
          <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
            Login
          </button>
        </>
      ) : (
        <>
          <p>Welcome: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
