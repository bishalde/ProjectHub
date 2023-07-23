import './App.css'
import Homepage from './components/Homepage';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  )
}

export default App
