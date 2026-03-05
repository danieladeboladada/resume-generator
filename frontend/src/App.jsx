import { Box } from "@chakra-ui/react"
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./app-components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CreateAccountPage = lazy(() => import("./pages/CreateAccountPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BuildResume = lazy(() => import("./pages/BuildResume"));
const TemplateSelection = lazy(() => import("./pages/TemplateSelection"));
const RecentlyDeleted = lazy(() => import("./pages/RecentlyDeleted"));

function App() {

  return (
    <Box>
      <Suspense fallback={<Box p={6}>Loading...</Box>}>
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
      </Suspense>
    </Box>
  );
}

export default App
