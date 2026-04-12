// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProviderWeb, useAuthWeb } from "./context/AuthContextWeb.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

import LoginScreenWeb from "./screens/LoginScreenWeb.jsx";
import RegisterScreenWeb from "./screens/RegisterScreenWeb.jsx";
import ForgotPasswordScreenWeb from "./screens/ForgotPasswordScreenWeb.jsx";

import ClientHomeWeb from "./screens/ClientHomeWeb.jsx";
import ClientDashboardWeb from "./screens/ClientDashboardWeb.jsx";
import PsychicProfileWeb from "./screens/PsychicProfileWeb.jsx";
import ChatScreenWeb from "./screens/ChatScreenWeb.jsx";
import WebCallScreen from "./screens/WebCallScreen.jsx";
import CallHistoryWeb from "./screens/CallHistoryWeb.jsx";
import BuyMinutesWeb from "./screens/BuyMinutesWeb.jsx";
import DeleteAccountScreenWeb from "./screens/DeleteAccountScreenWeb.jsx";

// ✅ NUEVAS SCREENS LEGALES WEB
import LegalHomeWeb from "./screens/LegalHomeWeb.jsx";
import LegalNormsWeb from "./screens/LegalNormsWeb.jsx";
import LegalOperationalWeb from "./screens/LegalOperationalWeb.jsx";
import PsychicCommentsScreenWeb from "./screens/PsychicCommentsScreenWeb.jsx";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuthWeb();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EFEAFB",
          color: "#311B92",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Cargando...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<ClientHomeWeb />} />
      <Route path="/psychic-profile" element={<PsychicProfileWeb />} />

      <Route path="/login" element={<LoginScreenWeb />} />
      <Route path="/register" element={<RegisterScreenWeb />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreenWeb />} />
      <Route path="/psychic-comments" element={<PsychicCommentsScreenWeb />} />

      {/* ✅ RUTAS LEGALES WEB */}
      <Route path="/legal" element={<LegalHomeWeb />} />
      <Route path="/legal/normas" element={<LegalNormsWeb />} />
      <Route path="/legal/operativo" element={<LegalOperationalWeb />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ClientDashboardWeb />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatScreenWeb />
          </ProtectedRoute>
        }
      />

      <Route
        path="/call"
        element={
          <ProtectedRoute>
            <WebCallScreen />
          </ProtectedRoute>
        }
      />

      <Route
        path="/call-history"
        element={
          <ProtectedRoute>
            <CallHistoryWeb />
          </ProtectedRoute>
        }
      />

      <Route
        path="/buy-minutes"
        element={
          <ProtectedRoute>
            <BuyMinutesWeb />
          </ProtectedRoute>
        }
      />

      <Route
        path="/delete-account"
        element={
          <ProtectedRoute>
            <DeleteAccountScreenWeb />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProviderWeb>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProviderWeb>
    </LanguageProvider>
  );
}

export default App;