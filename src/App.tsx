import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import ModalCarrinho from './components/ModalCarrinho'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante/:id',
    element: <Restaurante />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <ModalCarrinho />
    </>
  )
}

export default App
