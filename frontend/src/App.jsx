import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Dashboard from "./pages/Dashboard";
import BuildResume from "./pages/BuildResume";
import TemplateSelection from "./pages/TemplateSelection";
import ProtectedRoute from "./app-components/ProtectedRoute";
import RecentlyDeleted from "./pages/RecentlyDeleted";

function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createacct" element={<CreateAccountPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/buildresume" element={
          <ProtectedRoute>
            <BuildResume />
          </ProtectedRoute>
        } />
        <Route path="/template-selection" element={
          <ProtectedRoute>
            <TemplateSelection />
          </ProtectedRoute>
        } />
        <Route path="/recently-deleted" element={
          <ProtectedRoute>
            <RecentlyDeleted />
          </ProtectedRoute>
        } />
      </Routes>
    </Box>
  );
}

export default App
