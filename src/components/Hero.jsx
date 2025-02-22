import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import valentine from '../assets/valentine.jpg';
import books from '../assets/books.jpg';
import beauty from '../assets/beauty.jpg';
import kitchen from '../assets/kitchen.jpg';
import toys from '../assets/toys.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const images = [
    {src: valentine}, 
    {src: books}, 
    {src: beauty}, 
    {src: kitchen}, 
    {src: toys}
]

const Hero = () => {
 
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 8000)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className='hero-container'>
            {images.map((img, index) => (
                <div className={`hero-image ${index === currentIndex ? 'active' : ''}`}>
                <LazyLoadImage
                    key={index}
                    src={img.src}
                    alt="Amazon Hero"
                    effect="blur"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                />
                </div>
            ))}
            <div className='hero-message'>
                <p>You are on Amazon.com. You can also shop on Amazon India for Millions of products with fast local delivery.<Link to="https://www.amazon.in/">Click here to go to amazon.in</Link></p>
            </div>
        </div>
        </>
    )
}

export default Hero;