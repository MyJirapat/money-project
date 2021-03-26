import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, HashRouter
} from "react-router-dom";

import Category from './Category';
import Journal from './Journal'

function App() {
  return (
    <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Money Journey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#journal">Journal</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <HashRouter path="/journal">
          <Journal />
        </HashRouter>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}



function Home() {
  return (
    <div>
      <Container>
        <h1>Home</h1>
      </Container>
    </div>
  )
}
export default App;
