import React from 'react'; 
import { Link } from 'react-router-dom';
import pencil from '../assets/pencil.jpg';
import heart from '../assets/heart.jpg';
import console from '../assets/console.jpg'
import toys from '../assets/toys-section.jpg';
import furniture from '../assets/furnitures.jpg';
import lamps from '../assets/lamps.jpg';
import paintings from '../assets/paintings.jpg';
import skinCare from '../assets/skin-care.jpg';
import phone from '../assets/phone.jpg';
import keyboard from '../assets/keyboard.jpg';
import laptop1 from '../assets/laptop1.jpg';
import laptop2 from '../assets/laptop2.jpg';
import headphone from '../assets/headphones.jpg';
import mirror from '../assets/mirror.jpg';
import clothes1 from '../assets/clothes1.jpg';
import clothes2 from '../assets/clothes2.jpg'; 
import clothes3 from '../assets/clothes3.jpg';
import clothes4 from '../assets/clothes4.jpg';
import makeup2 from '../assets/makeup2.jpg';
import makeup3 from '../assets/makeup3.jpg';
import makeup1 from '../assets/makeup1.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const ShopSection = () => {

    const images = [
        { src: pencil, alt: "New Year, new supplies", linkText: "See more" },
        { src: heart, alt: "Shop Valentine's Day gifts", linkText: "Shop Now" },
        { src: console, alt: "Get your game on", linkText: "Shop gaming" },
        { src: toys, alt: "Toys & more", linkText: "Shop Now" },
        { src: furniture, alt: "Premium Furnitures", linkText: "See more"},
        { src: lamps, alt: "Lamps & more", linkText: "Shop Lamps"},
        { src: paintings, alt: "Get Beautiful Paintings", linkText: "Explore more"},
        { src: skinCare, alt: "Buy your skin", linkText: "Explore your favourites"},
    ]

    const images2 = [
        { src: phone, alt: "Phone"},
        { src: keyboard, alt: "Keyboard"},
        { src: laptop1, alt: "Laptop1"},
        { src: laptop2, alt: "laptop2"},
        { src: headphone, alt: "Headphone"},
    ]

    return (
        <>
        <div className='shop-section'>
            {images.map((image, index) => (
            <div className='box' key={index}>
                <h2 style={{ marginTop: '15px', marginLeft: '20px' }}>{image.alt}</h2>
                <div className="box1_img">
                   <LazyLoadImage 
                        src={image.src}
                        alt={image.alt}
                        effect='blur'
                        width="100%"
                        height="310px"
                        object-fit="cover"
                   />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}>
                    <Link>{image.linkText}</Link>
                </p>
            </div>
            ))}
        </div>

        <div className='banner-section'>
            <div className='banner-box'>
                <h2 style={{marginTop: '20px', marginLeft: '10px'}}>Best Electronics items</h2>
                <div className='banner-outer-box'>
                    {images2.map((image, index) => (
                    <div className='banner-inner-box' key={index}>
                        <LazyLoadImage 
                            className="banner-img"
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            height="100%"
                            width="100%"
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='shop-section'>
            <div className='box1 box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px' }}>New year, new supplies</h2>
                <div className="box1_img" style={{width: "100%", marginLeft: "-1px"}}>
                    <LazyLoadImage className="box1_img" src={pencil} alt="product" effect="blur"/>
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px' }}><Link>See more</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Makeup kits</h2>
                <div className='multiple-box'>
                    <div className="multiple-inner-box">
                        <LazyLoadImage className='img1' src={makeup3} alt="product" effect="blur" />
                        <LazyLoadImage className='img1' src={makeup2} alt='product' effect="blur" />
                    </div>
                    <div className='multiple-inner-second'>
                        <LazyLoadImage className='img2' src={makeup1} alt='product' effect="blur" />
                    </div>
                </div>
                <p className='para' style={{ marginTop: '12px', marginLeft: '20px'}}><Link>Shop Now</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Go with trends</h2>
                <div className="multiple-box">
                    <div className='multiple-inner-box'>
                    <LazyLoadImage className='img1' src={clothes1} alt='product' effect="blur" />
                    <LazyLoadImage className='img1' src={clothes2} alt='product' effect="blur" />
                    </div>
                    <div className='multiple-inner-box'>
                    <LazyLoadImage className='img1' src={clothes3} alt='product' effect="blur" />
                    <LazyLoadImage className='img1' src={clothes4} alt='product' effect="blur" />
                    </div>
                </div>
                <p className='para' style={{ marginTop: '10px', marginLeft: '16px'}}><Link>Shop clothes</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Buy Mirrors</h2>
                <div className='box1_img' style={{width: "100%", marginLeft: "-1px"}}>
                    <LazyLoadImage className='box1_img' src={mirror} alt='product' effect="blur" />
                </div>
                <p className='para' style={{ margin: '20px'}}><Link>Shop Now</Link></p>
            </div>
        </div>
        </>
    )
}

export default ShopSection;