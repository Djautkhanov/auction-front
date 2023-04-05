import { Route, Routes } from "react-router-dom"
import './App.css';
import Footer from "./components/Footer/Footer";
import AuctionPage from './pages/Auction/auctionPage'   
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <>
    <Routes>
      <Route path='auctionPage' element={<AuctionPage/>}/> 
    </Routes>
    <Sidebar/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
