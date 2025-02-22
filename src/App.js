import React, { Suspense } from 'react'; 
import './App.css';

const ShopSection = React.lazy(() => import("./components/ShopSection"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import ("./components/Navbar"));
const Panel = React.lazy(() => import("./components/Panel"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Panel />
                <Hero />
                <ShopSection />
                <Footer />
            </Suspense>
        </>
    )
}

export default App;