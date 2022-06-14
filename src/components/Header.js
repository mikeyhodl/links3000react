import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
      <Router>
      <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <a href="./"> <img className="logo" src="assets/images/logo.png" width="150px" /></a>
            </div>
            <div className="col-md-6 col-xs-6 text-center menu-1">
              <ul>
                <li><a href="./">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="product.html">Our Products</a></li>
                <li><a href="contact.html">Contact Us</a></li>
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
      </Router>
    );
  }
  
  export default App;
  