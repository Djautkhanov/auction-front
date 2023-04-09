import { Routes, Route } from "react-router-dom"
import Home from './pages/HomePage/Home'
import Authorization from "./pages/AuthorizationPage/Authorization";
import Registration from "./pages/RegistrationPage/Registration";
import AuctionPage from "./pages/Auction/auctionPage";
import AddSlot from "./pages/AddSlot/AddSlot";


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />   
        <Route path="auctionPage" element={<AuctionPage/>}/>
        <Route path="AddSlot" element={<AddSlot/>}/>         
      </Routes>
    </div>
  );
}

export default App;
