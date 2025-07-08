
import Navbar from './components/NavBar/index'
import Section from "./components/Section/index"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Paper from './pages/Paper'
import Syllabus from './pages/Syllabus';
import Timetable from './pages/Timetable';
import Bca from './pages/Bca';
import Bba from './pages/Bba';
import Mca from './pages/Mca';
import Mba from './pages/Mba';

function App() {
 

  return (
    <>
    <Header/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/paper' element={<Paper/>}></Route>
      <Route path='/syllabus' element={<Syllabus/>}></Route>
      <Route path='/timetable' element={<Timetable/>}></Route>
      <Route path='/bca' element={<Bca/>}></Route>
      <Route path='/bba' element={<Bba/>}></Route>
      <Route path='/mca' element={<Mca/>}></Route>
      <Route path='/mba' element={<Mba/>}></Route>
     </Routes>
     {/* <Section/> */}
     <Footer/>
    </>
  )
}

export default App
