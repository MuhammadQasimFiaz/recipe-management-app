import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import RecipeList from './components/RecipeList/RecipeList.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='recipe' element={<RecipeList />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
