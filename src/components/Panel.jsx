import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideMenu from './SideMenu';

const Panel = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <>
        <div className='panel'>
            <div className='panel-all border' onClick={() => setMenuOpen(true)}>
                <FontAwesomeIcon icon={faBars} /> All
            </div>
            <div className='panel-options'>
                <p className='border'>Today's Deals</p>
                <p className="border">Customer Service</p>
                <p className="border">Registry</p>
                <p className='border'>Gift Cards</p>
                <p className='border'>Sell</p>
            </div>
        </div>
            <SideMenu isOpen={menuOpen} isClose={toggleMenu} />
        </>
    )
}

export default Panel;