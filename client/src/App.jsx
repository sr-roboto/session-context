// FILE: App.jsx
import { useAuth } from './context/authContext';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';

function App() {
  const { state } = useAuth();

  if (state.loading) {
    return (
      <div
        className="
    flex justify-center items-center h-screen font-extrabold text-6xl
    
    "
      >
        Loading...
      </div>
    );
  } else if (!state.isAuthenticated) {
    return <LoginPage />;
  }
  return state.isAuthenticated ? <HomePage /> : <LoginPage />;
}

export default App;
