import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home.tsx";
import CompanyOwner from "./CompanyOwner.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foretagare" element={<CompanyOwner />} />
      </Routes>
    </>
  );
}

export default App;
