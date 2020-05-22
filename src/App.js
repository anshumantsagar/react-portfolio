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
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Hero from './components/Hero'

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

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about"exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
          <Route path="/contact"exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />

          <Footer/>
        </Container>
      </Router>
      );
  }
  
}

export default App;
