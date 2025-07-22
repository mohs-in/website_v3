import Hero from './components/Hero'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter
      future = {{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path='/' element={<Hero /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
