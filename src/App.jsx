import Hero from './components/Hero'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
