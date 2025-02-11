import React from 'react'; 
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Hero from './components/Hero';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Panel />
            <Hero />
            <ShopSection />
            <Footer />
        </>
    )
}

export default App;