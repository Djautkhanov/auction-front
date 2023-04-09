import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/HomePage/Home'
import Authorization from "./pages/AuthorizationPage/Authorization";
import Registration from "./pages/RegistrationPage/Registration";
import Users from "./components/Users";
import { useSelector } from "react-redux";


function App() {
  const token = useSelector((state) => state.authSlice.token)

  if (!token) {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    )
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
