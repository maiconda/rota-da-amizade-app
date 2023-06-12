import './App.css'
import Navbar from './components/navbar/navbar'
import RedirectHome from './screens/redirectHome/redirectHome'
import Home from './screens/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='root'>
      <BrowserRouter>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<RedirectHome/>}/>
      </Routes>
      <Navbar/>
      </main>
    </BrowserRouter>
    </div>
  ) 
}

export default App
