import MainPage from "./pages/MainPage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route
          path="/login"
          element={
            <div>
              <h1>Please log in</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
