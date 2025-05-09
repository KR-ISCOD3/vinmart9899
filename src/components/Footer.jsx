import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container font-text">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <h3 className="text-white">
              <NavLink  className='m-0 ms-1 fs-2 nav-link'>
                Vinmart
                <sub>9899</sub>
              </NavLink>
            </h3>
            <p className="fs-5 text-secondary">
                Open Coffee & Mart brings together the warmth of a coffeehouse and the convenience of a modern mart — all in one cozy space
            </p>
            {/* <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-pinterest fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram fs-5"></i></a>
            </div> */}
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white fs-3">Contact Info</h5>
            <ul className="list-unstyled text-light fs-5">
              <li><i className="bi bi-shop me-2 fs-"></i>- CoffeeCorner</li>
              <li><i className="bi bi-telephone me-2"></i>- 096 299 9624</li>
              <li><i className="bi bi-envelope me-2"></i>- vinmart@gmail.com</li>
              <li><i className="bi bi-geo-alt me-2"></i>- Phnom Penh</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-white fs-3">Contact Info</h5>
            <ul className="list-unstyled text-light fs-5">
              <li>- <NavLink className="text-light">Menu</NavLink></li>
              <li>- <NavLink className="text-light">Contact</NavLink></li>
              <li>- <NavLink className="text-light">Location</NavLink></li>
              <li>- <NavLink className="text-light">Review</NavLink></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white fs-3">Opening Hours</h5>
            <ul className="list-unstyled text-secondary fs-5">
              <li>Monday – Friday : 8AM – 8PM</li>
              <li>Saturday - Sunday : 9AM – 8PM</li>
            </ul>
          </div>
        </div>

        <hr className="text-light" />

        <div className="d-flex justify-content-between text-secondary small ">
          <div>Cr.Instructor Raksmey © 2025. All Rights Reserved.</div>
          <div>Developed by ETEC CENTER</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
