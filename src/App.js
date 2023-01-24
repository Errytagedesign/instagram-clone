import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/Routes";

const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
