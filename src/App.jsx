import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Bugs } from './Pages/Bugs'
import { Fish } from './Pages/Fish'
import { VillagerInfo } from './Pages/VillagerInfo'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bugs" element={<Bugs/>}/>
        <Route path="/Fish" element={<Fish/>}/>
        <Route path="/VillagerInfo" element={<VillagerInfo/>}/>
      </Routes>
    </Router>
  )
  
}

export default App


