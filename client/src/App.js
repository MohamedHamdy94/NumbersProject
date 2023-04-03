import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HOC from './Pages/HOC';
import SearchResult from './Pages/SearchResult';
import { Container } from 'react-bootstrap';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container className=" mt-5 ">
        <Routes>
          <Route path="/" element={<HOC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;
