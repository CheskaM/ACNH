

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Bugs } from './Pages/Bugs'
import { Fish } from './Pages/Fish'
import { VillagerInfo } from './Pages/VillagerInfo'
import { Layout } from './Layout'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bugs" element={<Bugs/>}/>
            <Route path="/Fish" element={<Fish/>}/>
            <Route path="/VillagerInfo" element={<VillagerInfo/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
  
}

export default App


