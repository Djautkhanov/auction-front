import Categories from "./components/categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddSlot from "./pages/AddSlot/AddSlot";
import "./App.css"
import AuctionAddTime from "./components/TimeAuction/TimeAuction";


function App() {
  return (
    <div className='app'>
      <Header />
      <AddSlot/>
      {/* <AuctionAddTime/> */}
      <Footer/>
    </div>
  );
}

export default App;
