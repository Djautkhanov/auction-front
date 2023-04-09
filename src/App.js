import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/HomePage/Home'
import Authorization from "./pages/AuthorizationPage/Authorization";
import Registration from "./pages/RegistrationPage/Registration";
import Users from "./components/Users";
import { useSelector } from "react-redux";
import AuctionPage from "./pages/Auction/auctionPage";
import AddSlot from "./pages/AddSlot/AddSlot";


function App() {
  const token = useSelector((state) => state.authSlice.token)

  if (!token) {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
        <Route path= '/add/slot' element={<AddSlot/>}/>
        <Route path="/auction" element={<AuctionPage/>}/>
      </Routes>
    )
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Navigate to='/' />} />
        <Route path="/auction" element={<AuctionPage/>}/>
        <Route path= '/add/slot' element={<AddSlot/>}/>
      </Routes>
    </div>
  );
}

export default App;
