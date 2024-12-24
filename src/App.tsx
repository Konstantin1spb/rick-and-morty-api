import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { AuthProvider } from './context'
import { PrivateRoute } from './components/privateRoute/privateRoute'
import { lazy } from 'react'

const MainPage = lazy(() => import('./pages/main/main').then(module => ({
  default: module.MainPage
})))

const CategoryPage = lazy(() => import('./pages/category/category').then(module => ({
  default: module.CategoryPage
})))

const ElementPage = lazy(() => import('./pages/element/element').then(module => ({
  default: module.ElementPage
})))

const LoginPage = lazy(() => import('./pages/login/login').then(module => ({
  default: module.LoginPage
})))

const NotFoundPage = lazy(() => import('./pages/notFound/notFound').then(module => ({
  default: module.NotFoundPage
})))

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
