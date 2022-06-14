function App() {
    return (
      <div>
        <aside id="fh5co-hero" className="js-fullheight">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(assets/images/slider.jpg)'}}>
                <div className="overlay-gradient" />
                <div className="container">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                    <div className="slider-text-inner">
                    </div></div></div></li></ul>
          </div>
        </aside>
        <div id="fh5co-product">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Our Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center animate-box">
                <div className="product">
                  <div className="product-grid" style={{backgroundImage: 'url(assets/images/Scaler\ Machine.jpg)'}}>
                    <div className="inner">
                      <p>
                      </p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3><a href="single.html">Scaler Machine</a></h3>
                    <span className="price">Kshs 90,000</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="product">
                  <div className="product-grid" style={{backgroundImage: 'url(assets/images/Suction\ Machine.jpg)'}}>
                    <div className="inner">
                      <p>
                      </p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3><a href="single.html">Suction Machine</a></h3>
                    <span className="price">Kshs 138,000</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="product">
                  <div className="product-grid" style={{backgroundImage: 'url(assets/images/Diapex.jpg)'}}>
                    <div className="inner">
                      <p>
                      </p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3><a href="single.html">Diapex</a></h3>
                    <span className="price">Kshs 3,800</span>
                  </div>
                </div>
              </div>
            </div>
            <span><a href="product.html">MORE PRODUCTS</a></span>
          </div>
        </div>
        <div id="fh5co-started">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Newsletter</h2>
                <p>Just stay tune for our latest Product. Now you can subscribe</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2">
                <form className="form-inline">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <button type="submit" className="btn btn-default btn-block">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  