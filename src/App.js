import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Company from './pages/company';
import './style/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/c/:company' element={<Company />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
