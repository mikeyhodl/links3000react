function App() {
    return (
      <div>
        <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage: 'url(assets/images/img_bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t">
                  <div className="display-tc animate-box" data-animate-effect="fadeIn">
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="fh5co-about">
          <div className="container">
            <div className="about-content">
              <div className="row animate-box">
                <div className="col-md-6">
                  <div className="desc">
                    <h3>Company History</h3>
                    <p>Links Three Thousand Ltd was registered in 2001.We deal in the supply of medical and dental materials and equipments .</p> 
                    <p>For dental we deal in all the consumables, disposables and equipment importing directly from various countries in the world e.g. Switzerland, Britain, South Korea, South Africa, Italy and Brazil We also deal in surgical disposables importing from China and India.</p>
                  </div>
                  <div className="desc">
                    <h3>Mission &amp; Vision</h3>
                    <h3>Mission</h3>
                    <p>The company is dedicated to the sourcing of the highest quality products since this ensures that the end user who is the patient is assured of the same and ultimately improved health. </p>
                    <h3>Vision</h3> 
                    <p>The company is dedicated to the sourcing of the highest quality products since this ensures that the end user who is the patient is assured of the same and ultimately improved health. </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img className="img-responsive" src="assets/images/about-sider.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  