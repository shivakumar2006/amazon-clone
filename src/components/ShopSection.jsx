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
        </>
    )
}

export default ShopSection;