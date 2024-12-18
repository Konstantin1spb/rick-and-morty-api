import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { CategoryPage, ElementPage, LoginPage, MainPage, NotFoundPage } from './pages'
import { AuthProvider } from './context'
import { PrivateRoute } from './components/privateRoute/privateRoute'

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/category/:id' element={<PrivateRoute><CategoryPage /></PrivateRoute>}></Route>
        <Route path='/category/:id/:id' element={<PrivateRoute><ElementPage /></PrivateRoute>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
