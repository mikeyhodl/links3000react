function App() {
    return (
      <div>
        <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t">
                  <div className="display-tc animate-box" data-animate-effect="fadeIn">
                    <h1>Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="fh5co-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-push-1 animate-box">
                <div className="fh5co-contact-info">
                  <h3>Contact Information</h3>
                  <ul>
                    <li className="address">30100 P.O. Box 5320<br /> Eldoret, Kenya Barngetuny Plaza Ground Floor</li>
                    <li className="phone"><a href="tel:254722209479">+ 254 722 209479</a></li>
                    <li className="email"><a href="mailto:info@linksthreethousandltd.co.ke">info@linksthreethousandltd.co.ke</a></li>
                    <li className="url"><a href="https://linksthreethousand.co.ke/">https://linksthreethousand.co.ke</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <h3>Get In Touch</h3>
                <form action="https://formcarry.com/s/C_RfIVhMknf" method="POST" acceptCharset="UTF-8">
                  <div className="row form-group">
                    <div className="col-md-6">
                      <input type="text" id="fname" className="form-control" name="First Name" placeholder="Your firstname" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" id="lname" className="form-control" name="Last Name" placeholder="Your lastname" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="text" id="email" className="form-control" name="Email" placeholder="Your email address" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="text" id="subject" className="form-control" name="Subject" placeholder="Your subject of this message" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Say something about us" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                  </div>
                  <div>
                    <input type="hidden" name="_gotcha" />
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
  