import React from 'react';
import Head from 'next/head';


const AboutPage = () => {
  return (
    <>
        <title>About - My Portfolio</title>
      <div className="main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row main_header_right">
                <figure>
                  <img 
                    src="/images/about.png" 
                    alt="Developer" 
                    title="MERN Stack Developer" 
                    className="img-fluid"
                  />
                </figure>
              </div>

              {/* <div className="col-md-6 col-12 main_header_left"> */}
                <p>Welcome to My World</p>
                <h1>
                  I am a <span className="txt_clr">MERN Stack Developer</span>, 
                   a freelancer
                </h1>
                <a href="/about">
                  <button>About Me</button>
                </a>
              {/* </div> */}
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutPage;
