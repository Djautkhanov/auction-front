import Categories from "./components/categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddSlot from "./pages/AddSlot/AddSlot";
import "./App.css"
import AuctionPage from "./pages/Auction/auctionPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router";
// import Timer from "./Timer";


function App() {
  return (
    <div className='app'>
      <Header />  
      <Routes>
        <Route path="auctionPage" element={<AuctionPage/>}/>       
      </Routes>
      {/* <AddSlot/>    */}
      {/* <Footer/>  */}
      {/* {/* <Timer/> */}

    

    </div>
  );
}

export default App;
