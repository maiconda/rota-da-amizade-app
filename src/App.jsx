import './App.css'
import Navbar from './components/navbar/navbar'
import RedirectHome from './screens/redirectHome/redirectHome'
import Home from './screens/home/home'
import InDevelopment from './screens/inDelevopment/inDevelopment'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='root'>
      <BrowserRouter>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<RedirectHome/>}/>
        <Route path='/favoritos' element={<InDevelopment/>}/>
        <Route path='/qr' element={<InDevelopment/>}/>
        <Route path='/chat' element={<InDevelopment/>}/>
        <Route path='/more' element={<InDevelopment/>}/>
      </Routes>
      <Navbar/>
      </main>
    </BrowserRouter>
    </div>
  ) 
}

export default App
