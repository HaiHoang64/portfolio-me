// import React from 'react';

import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import Hero from '../components/Hero/Hero.tsx';
import About from '../components/About/About.tsx';
import Projects from '../components/Projects/Projects.tsx';
import Contact from '../components/Contact/Contact.tsx';
import './Home.scss';

function Home() {
  return (
    <div className="home">
    <Header />

    <main className="content">
        <h1>Home!</h1>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </main>

    <Footer />
    </div>
  );
}

export default Home;
