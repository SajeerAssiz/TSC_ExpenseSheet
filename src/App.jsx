import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import EmployeeDirectory from './components/EmployeeDirectory';
import './App.css';

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error('Login error:', e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => {
      console.error('Logout error:', e);
    });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="app-title">Office 365 Employee Directory</h1>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="auth-button logout">
              Sign Out
            </button>
          ) : (
            <button onClick={handleLogin} className="auth-button login">
              Sign In with Microsoft
            </button>
          )}
        </div>
      </nav>

      <main className="main-content">
        {isAuthenticated ? (
          <EmployeeDirectory />
        ) : (
          <div className="welcome-container">
            <div className="welcome-content">
              <h2>Welcome to Employee Directory</h2>
              <p>Please sign in with your Microsoft account to view all employees.</p>
              <button onClick={handleLogin} className="welcome-button">
                Sign In with Microsoft
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
