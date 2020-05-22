import React,{Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//components
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : 'Anshumant Sagar',
      headerLinks : [
        { title: 'home', path : '/'},
        { title: 'about', path : '/about'},
        { title: 'contact', path: '/contact'}
      ],
      home : {
        title: 'Be Brave',
        subtitle: 'Keep Learning Keep Improving'
      },
      about : {
        title: 'About Me'
      },
      contact : {
        title : 'Let\'s Connect'
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Anshumant</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toogle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer/>
        </Container>
      </Router>
      );
  }
  
}

export default App;
