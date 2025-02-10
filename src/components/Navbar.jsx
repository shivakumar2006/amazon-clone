import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faCcAmazonPay } from '@fortawesome/free-brands-svg-icons';

const selector = ['All', 'Arts & Crafts', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Books', "Boy's Fashion", 'Computers', 'Deals', 'Digital Music', 'Electronics', "Girl's Fashion", 'Health & HouseHold', 'Home & Kitchen', 'industrial & Scientific', 'Kindle Store', "Luggage", "Men's Fashion", "Movies & TV", "Music, CD's & Vinyl", "Pet Supplies", "Prime Video", 'Software', 'Sports & Outdoors', "Tools & Home Improvements", "Toys & Games", "Video Games", "Women's Fashion"];

const Navbar = () => {

    const [ isVisible, setIsVisible ] = useState(false);

    return (
        <>
        <div className='navbar'>
            <div className="nav-logo border"> 
                <div className='logo'>
                    <FontAwesomeIcon icon={faAmazon} className='amazon-icon' />
                </div>
            </div>

            <div className="name border">
                <Link to='/' style={{ color: 'white', textDecorationColor: '#febd68' }}>
                    amazon
                </Link>
            </div>

            <div className='address border'>
                <p className='pin1'>Deliver to</p>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className='pin2'>India</p>
                    </div>
            </div>

            <div className='search' style={{ cursor: 'pointer'}}>
                <select className='selector' style={{ cursor: 'pointer'}}>
                    {selector.map((categories) => (
                    <option key={categories} value={categories}>{categories}</option>
                    ))}   
                </select>
                <input placeholder='Search Amazon' className='search-input' />
                <div className='search-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>

            <div className='border' style={{ fontSize: '35px', cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faCcAmazonPay} />
            </div>

            <div className='sign-in border'
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                <p>
                    <span style={{ fontSize: '0.75rem'}}>
                        Hello, Sign in
                    </span>
                </p>
                <p className="nav-link">Account & lists<span> <FontAwesomeIcon icon={faCaretDown} style={{ color: 'grey', fontSize: '12px'}}/></span></p>

                {isVisible && (
                    <div className="dropdown">
                        <button className='btn-nav-acc'>Sign in</button>
                        <p className='p-3'>New Customer?  <Link style={{ fontSize: '11px'}}> Start Here</Link></p>
                        <p className='p-1'><b>Your Account</b></p>
                        <p><Link>Accounts</Link></p>
                        <p><Link>Orders</Link></p>
                        <p><Link>Recommendations</Link></p>
                        <p><Link>Browsing History</Link></p>
                        <p><Link>WatchList</Link></p>
                        <p><Link>Video Purchases & Rentals</Link></p>
                        <p><Link>Kindle Unlimited</Link></p>
                        <p><Link>Content & Devices</Link></p>
                        <p><Link>Subscribe & Save Items</Link></p>
                    </div>
                )}
            </div>
            <div className="sign-in border">
                <p style={{ fontSize: '0.75rem'}}>
                    Returns
                </p>
                <p className='nav-link'>& Orders</p>
            </div>
            <div className='cart border'>
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '30px'}} />
                Cart
            </div>
        </div>
        
        </>
    )
}

export default Navbar;