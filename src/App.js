import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import Book from './components/Book/Book';
import Review from './components/Review/Reviews';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Hooks/ScrollToTop';


function App() {
  return (
    <div>
      <Router>
      <ScrollToTop/>
        <Header></Header>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/doctor' element={<Doctors/>}/>
            <Route path='/book' element={<Book/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/blog' element={<Blogs/>}/>
              
        </Routes>
        {/* <Route path='/footer' element={<Footer/>}/> */}
        <Footer/>
      </Router>
      
      
      
    </div>
  );
}

export default App;
