import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Problem from './pages/Problem';
import AboutMe from './pages/AboutMe';
import TIL from './pages/TIL'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Logo>
          <Link to="/" style={LogoStyle}>KwonEyng</Link>
        </Logo>
        <Pages>
          <Link to="/problem" style={PagesStyle}>PS</Link>
          <Link to="/til" style={PagesStyle}>TIL</Link>
          <Link to="/about" style={PagesStyle}>About Me</Link>
          <Link to="/portfolio" style={PagesStyle}>Portfolio</Link>
        </Pages>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/problem" component={Problem} />
        <Route exact path="/til" component={TIL} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

const Logo = styled.div`
  margin-left: 30px;
`;

const LogoStyle = {
  textDecoration: 'none',
  color: '#123421',
  fontSize: 25
}

const Pages = styled.div`
  position: absolute;
  right: 40px;
`;

const PagesStyle = {
  textDecoration: 'none',
  color: '#000',
  fontSize: 18,
  marginRight:30
}