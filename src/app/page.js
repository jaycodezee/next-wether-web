"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

                        <div className="col-md-6 col-12 main_header_right">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 200,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image
                                        className="w-10"
                                        src="/images/bg1.png"
                                        alt="First slide"
                                        layout="responsive"
                                        width={300}
                                        height={100}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        src="/images/bg2.png"
                                        alt="Second slide"
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        src="/images/bg3.png"
                                        alt="Third slide"
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
