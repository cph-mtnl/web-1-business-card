import MainPage from "./pages/MainPage.jsx";
import { Link, Route, Routes } from "react-router-dom";

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

/*

reference:

    <div>
      <nav>
        {buttons.map((button) => (
          <Link key={button.buttonText} to={button.route}>
            {button.buttonText}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home title="Home" />} exact />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<Contact title="Contact" />} />
        <Route element={<Page404 />} />
      </Routes>
    </div>

*/
