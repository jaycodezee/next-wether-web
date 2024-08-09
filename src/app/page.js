"use client"
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; 
import Link from 'next/link';

export default function Home() {
    const slideImages = [
        '/images/bg1.png',
        '/images/bg2.png',
        '/images/bg3.png'
    ];

    return (
        <>
            <div className="main_header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 main_header_left">
                            <p>Welcome to weather app</p>
                            <h1>
                                Get the latest <span className="txt_clr">weather</span> info of your city
                            </h1>
                            <Link href="/weather">
                                <button>Check now</button>
                            </Link>
                        </div>

                        {/* <div className="col-md-6 col-12 main_header_right"> */}
                            {/* <Slide
                                duration={1000} 
                                indicators={true}
                                arrows={true} 
                            >
                                {slideImages.map((url, index) => (
                                    <div className="each-slide" key={index}>
                                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                            <Image
                                                src={url}
                                                alt={`Slide ${index + 1}`}
                                                layout="fill"
                                                // objectFit="cover" 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slide> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
