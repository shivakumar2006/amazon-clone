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

const ShopSection = () => {
    return (
        <>
        <div className='shop-section'>
            <div className='box1 box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px' }}>New year, new supplies</h2>
                <div className="box1_img">
                    <img className="box1_img" src={pencil} alt="photo" />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px' }}><Link>See more</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Shop Valentine's Day gifts</h2>
                <div className="box1_img">
                    <img className='box1_img' src={heart} alt="photo" />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}><Link>Shop Now</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Get your game on</h2>
                <div className="box1_img">
                    <img className='box1_img' src={console} alt='photo' />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}><Link>Shop gaming</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Toys & more</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={toys} alt='photo' />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}><Link>Shop Now</Link></p>
            </div>
        </div>

        <div className='shop-section'>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Premium Furnitures</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={furniture} alt='photo' />
                    <p className='para' style={{ marginTop: '0px', marginLeft: '9px'}}><Link>See more</Link></p>
                </div>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Lamps & more</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={lamps} alt="photo" />
                    <p className='para' style={{ marginTop: '0px', marginLeft: '9px'}}><Link>Shop lamps</Link></p>
                </div>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Get Beautiful Paintings</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={paintings} alt='photo' />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}><Link>Explore more</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Buy your skin care</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={skinCare} alt='photo' />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px'}}><Link>Explore your favourites</Link></p>
            </div>
        </div>

        <div className='banner-section'>
            <div className='banner-box'>
                <h2 style={{marginTop: '20px', marginLeft: '10px'}}>Best Electronics items</h2>
                <div className='banner-outer-box'>
                    <div className='banner-inner-box'>
                        <img className='banner-img' src={phone} alt='photo' />
                    </div>
                    <div className='banner-inner-box'>
                        <img className='banner-img' src={keyboard} alt='photo' />
                    </div>
                    <div className='banner-inner-box'>
                        <img className='banner-img' src={laptop1} alt='photo' />
                    </div>
                    <div className='banner-inner-box'>
                        <img className='banner-img' src={laptop2} alt='photo' />
                    </div>
                    <div className='banner-inner-box'>
                        <img className='banner-img' src={headphone} alt='photo' />
                    </div>
                </div>
            </div>
        </div>

        <div className='shop-section'>
            <div className='box1 box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px' }}>New year, new supplies</h2>
                <div className="box1_img">
                    <img className="box1_img" src={pencil} alt="photo" />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px' }}><Link>See more</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Makeup kits</h2>
                <div className='multiple-box'>
                    <div className="multiple-inner-box">
                        <img className='img1' src={makeup3} alt="photo" />
                        <img className='img1' src={makeup2} alt='photo' />
                    </div>
                    <div className='multiple-inner-second'>
                        <img className='img2' src={makeup1} alt='photo' />
                    </div>
                </div>
                <p className='para' style={{ marginTop: '12px', marginLeft: '20px'}}><Link>Shop Now</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Go with trends</h2>
                <div className="multiple-box">
                    <div className='multiple-inner-box'>
                    <img className='img1' src={clothes1} alt='photo' />
                    <img className='img1' src={clothes2} alt='photo' />
                    </div>
                    <div className='multiple-inner-box'>
                    <img className='img1' src={clothes3} alt='photo' />
                    <img className='img1' src={clothes4} alt='photo' />
                    </div>
                </div>
                <p className='para' style={{ marginTop: '10px', marginLeft: '16px'}}><Link>Shop clothes</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Buy Mirrors</h2>
                <div className='box1_img'>
                    <img className='box1_img' src={mirror} alt='photo' />
                </div>
                <p className='para' style={{ margin: '20px'}}><Link>Shop Now</Link></p>
            </div>
        </div>
        </>
    )
}

export default ShopSection;