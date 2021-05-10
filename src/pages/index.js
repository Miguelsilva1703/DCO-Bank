import "../../src/App.css";
import { useState } from "react";
import Navbar from "../components/Navigation/Navbar";
import Hero from "../components/Hero/Hero";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Hero />
        </>
    );
};

export default Home;
