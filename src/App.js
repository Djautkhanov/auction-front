import { Routes, Route } from "react-router-dom"
import Home from './pages/HomePage/Home'
import Authorization from "./pages/AuthorizationPage/Authorization";
import Registration from "./pages/RegistrationPage/Registration";
import AddSlot from "./pages/AddSlot/AddSlot";
import AuctionPage from "./pages/Auction/auctionPage";



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
        <Route path= '/add/slot' element={<AddSlot/>}/>
        <Route path="/auction" element={<AuctionPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
