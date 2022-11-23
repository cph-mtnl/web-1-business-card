import MainPage from "./pages/MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
