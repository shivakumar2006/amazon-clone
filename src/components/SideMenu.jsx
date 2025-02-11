import React from 'react'; 
import { FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';

const SideMenu = ({ isOpen, isClose }) => {
    return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className='close-button' onClick={isClose}>
                    <FaTimes /> Close
                </button>
               <div className='side-menu-heading' style={{ marginTop: '40px'}}>
                <h3 style={{ marginBottom: '12px'}}>Digital Content & Devices</h3>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Prime Video</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Amazon Music</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Kindle E-readers & Books</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Amazon Appstore</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
               </div>

               <div className='side-menu-heading' style={{ marginTop: '40px'}}>
                <h3 style={{ marginBottom: '12px'}}>Shop by Department</h3>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Electronics</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Computers</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Smart Home</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Art & Crafts</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
               </div>

               <div className='side-menu-heading' style={{ marginTop: '40px'}}>
                <h3 style={{ marginBottom: '12px'}}>Programs & Features</h3>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Gift Cards</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Shop by Interest</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Amazon Live</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>International Shopping</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
               </div>

               <div className='side-menu-heading' style={{ marginTop: '40px'}}>
                <h3 style={{ marginBottom: '12px'}}>Help & Settings</h3>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}>Your Account</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}><FontAwesomeIcon icon={faGlobe} style={{marginRight: '5px'}}/>English</p>
                    </div>
                    <div className='side-menu-item'>
                        <p style={{ marginRight: '50px'}}><FontAwesomeIcon icon={faAws} style={{marginRight: '5px'}}/>Customer Service</p><FontAwesomeIcon icon={faChevronRight} />
                    </div>
               </div>
            </div>

            {isOpen && <div className='backdrop' onClick={isClose}></div>}
        </>
    )
}

export default SideMenu;