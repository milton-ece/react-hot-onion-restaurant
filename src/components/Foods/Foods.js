import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {

    const [menuTab, setMenuTab] = useState('Breakfast')
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('../../foodData.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setFoods(data))
    }, [])

    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div>
                <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.type).map(item => (
                    <Food key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Foods;