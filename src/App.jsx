import { Home, Route } from "lucide-react"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Router index_element = {<Home />} />
          <Router path="*" element = {<NotFound />} />
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
