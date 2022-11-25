import React from 'react';
import OurServices from '../../../OurServices/OurServices';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <OurServices></OurServices>
        </div>
    );
};

export default Home;