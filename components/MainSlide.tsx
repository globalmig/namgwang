"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSlide() {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
    };

    return (
        <Slider ref={sliderRef} {...settings} className="main-slider">
            <div className="main-slider-item">
                <Image src="/images/banner1.jpg" alt="유압 기기 개발과 생산 전문 업체" width={2560} height={700} priority quality={100} />
            </div>
            <div className="main-slider-item">
                <Image src="/images/banner2.jpg" alt="유압 기기 개발과 생산 전문 업체" width={2560} height={700} priority quality={100} />
            </div>
            <div className="main-slider-item">
                <Image src="/images/banner3.jpg" alt="유압 기기 개발과 생산 전문 업체" width={2560} height={700} priority quality={100} />
            </div>
        </Slider>
    )
}