import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import valentine from '../assets/valentine.jpg';
import books from '../assets/books.jpg';
import beauty from '../assets/beauty.jpg';
import kitchen from '../assets/kitchen.jpg';
import toys from '../assets/toys.jpg';

const images = [valentine, books, beauty, kitchen, toys]

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
                <img
                    key={index}
                    src={img}
                    alt="Amazon Hero"
                    className={`hero-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            <div className='hero-message'>
                <p>You are on Amazon.com. You can also shop on Amazon India for Millions of products with fast local delivery.<Link to="https://www.amazon.in/">Click here to go to amazon.in</Link></p>
            </div>
        </div>
        </>
    )
}

export default Hero;