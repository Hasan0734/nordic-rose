import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {

    return (
        <>

            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;