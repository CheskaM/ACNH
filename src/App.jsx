

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Bugs } from './Pages/Bugs'
import { Fish } from './Pages/Fish'
import { Villagers } from './Pages/Villagers'
import { Layout } from './Layout'

import { Chart as ChartJS } from 'chart.js/auto'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bugs" element={<Bugs/>}/>
            <Route path="/Fish" element={<Fish/>}/>
            <Route path="/Villagers" element={<Villagers/>}/>          
          </Route>
        </Routes>
      </Router>
    </>
  )
  
}

export default App


