import "../../src/App.css";
import { useState } from "react";
import Navbar from "../components/Navigation/Navbar";
import Hero from "../components/Hero/Hero";
import Info from "../components/InfoSection/Info";
import { InfoOne, InfoTwo, InfoThree } from "../components/InfoSection/data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...InfoOne} />
            <Info {...InfoTwo} />
            <Services />
            <Info {...InfoThree} />
            <Footer />
        </>
    );
};

export default Home;
