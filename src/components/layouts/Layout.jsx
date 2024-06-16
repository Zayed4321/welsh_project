import React from 'react';
import Helmet from "react-helmet";
import Navbar from '../navbar/Navbar';

const Layout = ({
    children,
    title = "Welsh Industries",
    description = "This is a Real Estate and Construction Website that is made by Zayed Alam",
    keywords = "construction, online, order, purchase, real estate, realtor, business, container, home, container home",
    author = "Zayed Alam"
}) => {
    return (
        <div className='max-w-[1440px] mx-auto' >
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <div className=''>
                <main className='min-h-screen'>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;