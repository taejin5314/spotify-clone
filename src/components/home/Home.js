import React from 'react';
import Footer from '../player/footer/Footer';
import Sidebar from '../player/sidebar/Sidebar';
import './Home.css';

function Home({ spotify }) {
    return (
        <div className="home">
            <div className="home__body">
                <Sidebar spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
