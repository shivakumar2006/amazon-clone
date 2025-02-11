import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
        <div className='foot-panel1'>
            <p>Back to top</p>
        </div>
        <div className='foot-panel2'>
            <ul>
                <p>Get to Know Us</p>
                <Link>Careers</Link>
                <Link>Blog</Link>
                <Link>About Amazon</Link>
                <Link>investor Relations</Link>
                <Link>Amazon Devices</Link>
                <Link>Amazon Science</Link>
            </ul>
            <ul>
                <p>Make Money With Us</p>
                <Link>Sell products on Amazon</Link>
                <Link>Sell on Amazon business</Link>
                <Link>Sell apps on Amazon</Link>
                <Link>Become an Affiliate</Link>
                <Link>Advertise your Products</Link>
                <Link>Self-publish with us</Link>
                <Link>Host on Amazon Hub</Link>
                <Link>See more make money with us</Link>
            </ul>
            <ul>
                <p>Amazon payment Products</p>
                <Link>Amazon Business Cards</Link>
                <Link>Shop with Points</Link>
                <Link>Reload your Balance</Link>
                <Link>Amazon Currency Converter</Link>
            </ul>
            <ul>
                <p>Let Us Help you</p>
                <Link>Amazon and COVID-19</Link>
                <Link>Your Account</Link>
                <Link>Your Orders</Link>
                <Link>Shipping Rates and Policies</Link>
                <Link>Returns & Replacements</Link>
                <Link>Manage your Content and Devices</Link>
            </ul>
        </div>
        <div className='foot-panel3'>
            <FontAwesomeIcon icon={faAmazon} />
        </div>
        <div className='foot-panel4'>
            <div className='pages'>
                <Link>Conditions of use</Link>
                <Link>Privacy Notice</Link>
                <Link>Your ads Privacy choices</Link>
            </div>
        </div>
        <div className='copyright'>
        © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
        </>
    )
}

export default Footer;