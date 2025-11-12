import React, { Component } from 'react';
import "./footer.css"
import logo from "../assets/logo.svg"
const Foot = () => {
    return ( 
        <>
        <footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="logo">
        <img src={logo} ></img>
      </div>
      <h2>Abdalrhman Mohamed</h2>
      <p>By subscribing to the newsletter you agree<br/>with terms of privacy and policy</p>

      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-x-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

    <div class="footer-links">
      <div class="footer-column">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">Contact me</a></li>
          <li><a href="#">My news</a></li>
          <li><a href="#">About projects</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">My portfolio</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>About me</h3>
        <ul>
          <li><a href="#">About work</a></li>
          <li><a href="#">Abdalrhman news</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Supply chain transparency</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>More From me</h3>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">New projects</a></li>
          <li><a href="#">Ideas</a></li>
          <li><a href="#">UX designs</a></li>
          <li><a href="#">Logos</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
        </>
     );
}
 
export default Foot;