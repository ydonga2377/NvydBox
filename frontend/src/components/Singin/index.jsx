import React from 'react';

const Index = () => {
  return (
    <div>
      <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="normal__breadcrumb__text">
                <h2>Login</h2>
                <p>Welcome to the official Anime blog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="login spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form action="#">
                  <div className="input__item">
                    <input type="text" placeholder="Email address" />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item">
                    <input type="password" placeholder="Password" />
                    <span className="icon_lock"></span>
                  </div>
                  <button type="submit" className="site-btn">Login Now</button>
                </form>
                <a href="#" className="forget_pass">Forgot Your Password?</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Don’t Have An Account?</h3>
                <a href="#" className="primary-btn">Register Now</a>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch"><i className="icon_close"></i></div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
