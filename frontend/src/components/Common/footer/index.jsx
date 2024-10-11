import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer class="footer">
<div class="page-up">
    <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-3">
            <div class="footer__logo">
                <a href="./index.html"><img src="img/logo.png" alt=""/></a>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="footer__nav">
                <ul>
                    <li class="active"><a href="./index.html">Homepage</a></li>
                    <li><a href="./categories.html">Categories</a></li>
                    <li><a href="./blog.html">Our Blog</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3">
            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p>

          </div>
      </div>
  </div>
</footer>
);
}

export default Footer;