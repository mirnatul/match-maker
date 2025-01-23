import React from 'react';
import bannerImg from '../../assets/banner-pic.png';

const Banner = () => {

    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <div className="bg-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-6 text-center">
                    <div>
                        <p className="mt-6 text-5xl font-bold text-center">
                            Find Your <span className='text-[#ffccca]'>Real Connections</span>
                        </p>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            We are committed to helping singles find love every day and we are confident in our ability to do
                            so. eharmony matches single women and men for lasting and fulfilling relationships.
                        </p>
                    </div>
                    <button style={{ boxShadow: '4px 4px' }} className='border-2 border-black bg-[#ffccca] hover:bg-[#ff9e9a] hover:transition hover:duration-500 hover:scale-105 px-6 py-4 mt-4 font-medium'>Join MatchMaker</button>
                </div>
                <div className='mt-6'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;