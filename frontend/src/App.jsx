import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createacct" element={<CreateAccountPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Box>
  );
}

export default App
