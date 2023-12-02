import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home/Home"
import Add from "./Add"
import Read from "./Read"
import Update from "./components/Update"
import MarkChart from "./components/Home/Chart"

function App() {
 

  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/read/:id" element={<Read/>}/>
        <Route path="/Update/:id" element={<Update/>}/>
        <Route path="/chart" element={<MarkChart/>}/>
      
      
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
