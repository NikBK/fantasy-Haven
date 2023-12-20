"use client";

import { useEffect, useState } from 'react';
// import styles from './SimpleCarousel.module.css';

const images = [
    'https://sugermint.com/wp-content/uploads/2023/04/Fantasy-Cricket.jpg',
    'https://d1zhyf4obee6da.cloudfront.net/s3fs-public/2023-10/900x650%202%20%281%29.png',
    'https://images.yourstory.com/cs/2/dc9aa1302d6c11e9aa979329348d4c3e/top-10-fantasy-cricket-apps-1598603023937.jpg',
    // Add more image paths as needed
];

const slideInterval = 5000;

const SimpleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, slideInterval);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel">
            {images.map((image: string, index: number) => (
                <div key={index} className={`slide ${index === currentIndex ? 'activeSlide' : ''}`} style={{ backgroundImage: `url(${image})` }} />
            ))}
        </div>
    );
};

export default SimpleCarousel;
