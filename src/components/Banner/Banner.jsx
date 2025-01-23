import React from 'react';
import bannerImg from '../../assets/banner-pic.png';
import cloud from '../../assets/pink-cloud.webp';

const Banner = () => {
    return (
        <div className='overflow-hidden'>
            <img className='hidden lg:block absolute -ml-10 mt-8 scale-90' src={cloud} alt="" />
            <div className='relative'>
                <img className='hidden lg:block absolute right-0 -mr-10 mt-28 scale-90' src={cloud} alt="" />
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className="bg-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl space-y-6 text-center">
                        <div>
                            <p className="mt-6 text-4xl md:text-5xl font-bold text-center">
                                Find Your <span className='text-[#ffc7cb]'>Real Connections</span>
                            </p>
                            <p className="mt-2 text-center text-sm text-slate-600">
                                We are committed to helping singles find love every day and we are confident in our ability to do
                                so. eharmony matches single women and men for lasting and fulfilling relationships.
                            </p>
                        </div>
                        <button style={{ boxShadow: '4px 4px' }} className='border-2 border-black bg-[#ffc7cb] hover:bg-[#ff9e9a] hover:transition hover:duration-500 hover:scale-105 px-6 py-4 mt-4 font-medium'>Join MatchMaker</button>
                    </div>
                    <div className='mt-6'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;