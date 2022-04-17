import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/About/AboutMe/AboutMe'
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
