import React from 'react';
import Footer from '../player/footer/Footer';
import Sidebar from '../player/sidebar/Sidebar';
import './Home.css';
import HomeBody from './homeBody/HomeBody';

function Home({ spotify }) {
    return (
        <div className="home">
            <div className="home__body">
                <Sidebar spotify={spotify} />
                <HomeBody spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
