import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lanch/Lunch';

const Home = () => {
    return (
        <div>
            {/* <h3>This is Home</h3> */}

            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>

        </div>
    );
};

export default Home;