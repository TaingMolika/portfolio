import { Home, Route } from "lucide-react"
import { BrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Router index_element = {<HomePage />} />
          <Router path="*" element = {<NotFound />} />
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
