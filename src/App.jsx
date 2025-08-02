import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarBackground from "./components/StarBackground";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

