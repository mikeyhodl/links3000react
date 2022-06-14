import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';

function App() {
    return (
      <Router>
      <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <Link to="/"> <img className="logo" src="assets/images/logo.png" width="150px" alt=''/></Link>
            </div>
            <div className="col-md-6 col-xs-6 text-center menu-1">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Product">Our Products</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
              <ul>
                <li className="search">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button"><a href="https://twitter.com" /><i className="icon-twitter" /></button>
                      <button className="btn btn-primary" type="button"><a href="https://facebook.com" /><i className="icon-facebook" /></button>
                      <button className="btn btn-primary" type="button"><a href="https://linkedin.com" /><i className="icon-linkedin" /></button>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Product" element={<Product />} />
      </Routes>
      </Router>
    );
  }
  
  export default App;
  