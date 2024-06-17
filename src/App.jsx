import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { useSelector } from 'react-redux'
import './App.css'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'

function App() {

  let isDark = useSelector(state => state.darkMode.value)

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
