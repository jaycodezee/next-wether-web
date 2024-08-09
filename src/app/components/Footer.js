"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <h5>Contact Us</h5>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com"className="highlight">jaykyada3700@gmail.com</a>
            </p>
            <p>
              Phone:
              <a
                href="https://wa.me/917859942973"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                +91 7859942973
              </a>
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h5>Links</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/weather">Weather</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://jaykyada.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                kyada jay.
              </a>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
