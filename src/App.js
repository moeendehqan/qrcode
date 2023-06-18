import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './style/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
