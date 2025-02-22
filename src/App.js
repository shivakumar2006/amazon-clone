import React, { Suspense } from 'react'; 
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Footer from './components/Footer';
import './App.css';

const ShopSection = React.lazy(() => import("./components/ShopSection"));
const Hero = React.lazy(() => import("./components/Hero"));

const App = () => {
    return (
        <>
            <Navbar />
            <Panel />
            <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <ShopSection />
            </Suspense>
            <Footer />
        </>
    )
}

export default App;