import './App.css'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Logout from './components/Logout';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Signup from './components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
