import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Company from './pages/company';
import Personal from './pages/personal';
import './style/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/c/:company' element={<Company />}/>
        <Route path='/:personal' element={<Personal />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
