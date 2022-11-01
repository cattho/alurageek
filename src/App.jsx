import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainfooter from "./components/footer/Mainfooter"
import NavBar from "./components/header/NavBar"
import Login from "./components/login/Login"
import MainContainer from "./components/main/MainContainer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Mainfooter />
    </div>
  )
}

export default App
