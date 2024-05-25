import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { Page1 } from './pages/Page1'
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  let isDark = useSelector(state => state.darkMode.value)

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>\
            <Route path="/page1" element={<Page1/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App