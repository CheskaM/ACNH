import Header from './Header.jsx'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Bugs } from './Pages/Bugs'
import { Fish } from './Pages/Fish'
import { VillagerInfo } from './Pages/VillagerInfo'
import { Layout } from './Layout'

import Footer from './Footer.jsx'





function App() {

  return (
    <>
    <Header/>
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
    <Footer/>
    </>
  )
  
}

export default App


