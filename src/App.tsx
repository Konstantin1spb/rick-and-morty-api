import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { CategoryPage, ElementPage, MainPage, NotFoundPage } from './pages'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/category/:id' element={<CategoryPage />}></Route>
        <Route path='/category/:id/:id' element={<ElementPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
  
}

export default App
