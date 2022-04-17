import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/About/AboutMe/AboutMe'
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/About/Blogs/Blogs';
import Sequre from './Pages/Sequre/Sequre';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:checkId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>


        <Route path='/sequre' element={
          <RequireAuth>
            <Sequre></Sequre>
          </RequireAuth>
        }></Route>


        <Route path='/sequre' element={<Sequre></Sequre>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
