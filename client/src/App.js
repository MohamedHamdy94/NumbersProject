import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import Login from './Pages/Login';
import Home from './Pages/Home';
import HOC from '../src/Pages/SearchResult';
function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Container className=" mt-5 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SearchResult" element={<HOC />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;
