import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Destination from './Pages/Destination/Destination'
import Crew from './Pages/Crew/Crew'
import Technology from './Pages/Technology/Technology'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  )
}

export default App
