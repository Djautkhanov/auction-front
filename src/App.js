import Categories from "./components/categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddSlot from "./pages/AddSlot/AddSlot";
import "./App.css"


function App() {
  return (
    <div className='app'>
      <Header />
      <AddSlot/>
      <Footer/>
    </div>
  );
}

export default App;
