import React, { Suspense } from 'react'; 
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

const ShopSection = React.lazy(() => import("./components/ShopSection"));

const App = () => {
    return (
        <>
            <Navbar />
            <Panel />
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
            <ShopSection />
            </Suspense>
            <Footer />
        </>
    )
}

export default App;