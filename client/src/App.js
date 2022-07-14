import './App.css'
import { Route, Routes } from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Projects from './routes/Projects'
import Issues from './routes/Issues'
import Collaborators from './routes/Collaborators'

export default function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/collaborators" element={<Collaborators />} />
      </Routes>
    </div>
  )
}
