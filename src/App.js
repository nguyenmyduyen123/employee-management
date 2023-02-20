import { Routes, Route } from 'react-router-dom'
import Employee from './Pages/Employee'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Employee />} />
      {/* <Route path='/orders' element={<Orders />} />
      <Route path='/products' element={<Products />} />
      <Route path='/customers' element={<Customers />} /> */}
    </Routes>
  )
}