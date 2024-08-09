"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const AboutPage = () => {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>About - My Portfolio</title>
      </Head>
      <div className="main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 main_header_left">
                <p>Welcome to My Project</p>
                <h1>
                  I am a <span className="txt_clr">MERN Stack Developer</span> 
                  and a freelancer
                </h1>
                <a  href="https://jaykyada.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button>About Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
