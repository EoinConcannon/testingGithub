import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//header, footer & content js are in the src/components folder
import Content from './components/content';
import Footer from './components/footer';//replaced by read
import Header from './components/header';//replaced by create
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* jsx comment */}

        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* href changes url */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          {/* accessed via components folder and hrefs above */}
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/read' element={<Read></Read>}></Route> {/*displays an array of data / imgs using json*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
