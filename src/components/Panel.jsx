import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Panel = () => {
    return (
        <div className='panel'>
            <div className='panel-all border'>
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
    )
}

export default Panel;