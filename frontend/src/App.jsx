import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Dashboard from "./pages/Dashboard";
import ViewResumes from "./pages/ViewResumes";
import BuildResume from "./pages/BuildResume";

function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createacct" element={<CreateAccountPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewresumes" element={<ViewResumes />} />
        <Route path="/buildresume" element={<BuildResume />} />

      </Routes>
    </Box>
  );
}

export default App
