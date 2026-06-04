import React from 'react';

import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import './Home.scss';

function Home () {
return (
    <div className='home' >
        <Header />
        <h1> Home!</h1>
        <Footer />
    </div>
);
} 

export default Home;