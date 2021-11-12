import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Home from './pages/Home';
import Plan from './pages/Plan';
import About from './pages/About';
import Footer from './layouts/Footer';
import './styles/index.scss';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/plan" component={Plan} />
      </Switch>
      <Footer />
    </Router>
   );
}
 
export default App;