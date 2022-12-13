// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar/MainNav';
import {Routes,Route} from "react-router-dom"
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <>
      <Header/>
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/series' element={<Series/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </>
  );
}

export default App;
