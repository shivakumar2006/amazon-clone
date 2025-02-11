import React from 'react'; 
import { Link } from 'react-router-dom';
import pencil from '../assets/pencil.jpg';

const ShopSection = () => {
    return (
        <div className='shop-section'>
            <div className='box1 box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px' }}>New year, new supplies</h2>
                <div className="box1_img">
                    <img className="box1_img" src={pencil} alt="photo" />
                </div>
                <p className='para' style={{ marginTop: '18px', marginLeft: '20px', }}><Link>See more</Link></p>
            </div>
            <div className='box'>
                <h2 style={{ marginTop: '15px', marginLeft: '20px'}}>Shop Valentine's Day gifts</h2>
            </div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
    )
}

export default ShopSection;