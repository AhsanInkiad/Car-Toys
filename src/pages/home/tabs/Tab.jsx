import React, { useEffect, useState } from 'react';
import './Tab.css'

const Tab = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setTabs(data.slice(0, 3)))
    })

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container pb-32'>
            <div className='tabs lg:grid lg:grid-cols-3'>
                {tabs.map((tab) =>
                    <button id={tab.c_id} disabled={currentTab === `${tab.c_id}`} onClick={(handleTabClick)}>{tab.category}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab) =>
                    <div >
                        {currentTab === `${tab.c_id}` && <div>
                            
                            <div className='flex justify-between m-12'>
                                {
                                    tab.toysgula.map((toy) =>
                                        <div className="card drop-shadow-2xl lg:card-side bg-[#1A1A1A] shadow-xl">
                                            <figure><img className='h-40 w-full  lg:h-full lg:w-64' src={toy.picture} alt="Album" /></figure>
                                            <div className="card-body">
                                                <h2 className="font-semibold text-white">Name: {toy.name}</h2>
                                                <p className='font-semibold text-white'>Price: {toy.price}</p>
                                                <p className='font-semibold text-white'>Rating: {toy.rating}</p>
                                                <div className="card-actions ">
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tab;