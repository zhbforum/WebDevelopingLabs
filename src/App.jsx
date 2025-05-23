import { useEffect, useState } from "react";
import { AuthService } from "auth-oidc";

const authService = new AuthService({
  authority: "https://accounts.universitywithme.org.ua/realms/KhPI",
  clientId: "student-lab",
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = authService.isLoggedIn();
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        const fetchedToken = authService.getToken();
        const fetchedName = authService.getUserInfo("name");
        setToken(fetchedToken);
        setName(fetchedName);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = () => {
    authService.login();
  };

  const handleLogout = () => {
    authService.logout();
  };

  const handleCopyToken = async () => {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>Auth by OIDC</h1>

      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <div className="info-box">
            <p>
              <strong>Name:</strong> {name}
            </p>

            <p
              onClick={handleCopyToken}
              title="Click to copy full token"
              style={{
                cursor: "pointer",
                userSelect: "none",
                marginTop: "1rem",
              }}
            >
              <strong>Token:</strong> {token?.slice(0, 20)}...{" "}
              <span style={{ opacity: 0.5 }}>(click to copy)</span>
            </p>

            {copied && (
              <p className="copied-text" style={{ marginTop: "0.5rem" }}>
                Copied!
              </p>
            )}
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
