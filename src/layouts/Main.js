import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Main;