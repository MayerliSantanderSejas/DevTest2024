import Header from './layouts/Header'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header/>
      <Routes>
        <Route path='*' element={<MainPage />}/>
      </Routes>
    </div>
  )
}

export default App
