import React from 'react';

const FindYourLove = () => {
    return (
        <div className='lg:my-20'>
            <div className='grid lg:grid-cols-6 lg:h-[610px]'>
                <div className='col-span-2 flex justify-center md:justify-end items-center -mb-12'>
                    <div style={{ boxShadow: '10px 10px' }} className='relative border-2 border-black w-[460px] text-center md:w-[512px] px-8 py-12 -mr-44 z-10 bg-white'>
                        <img className='absolute top-0 right-0 -mt-16 mr-28 -rotate-12 lg:w-[100px] w-[0]' src="https://i.ibb.co.com/BzCMsbG/location-pin-circular-red-b.png" alt="location-pin-circular-red-b" border="0" />
                        <h2 className='text-4xl md:text-5xl font-bold'><span className='text-[#ffc7cb]'>Find</span> Your Love</h2>
                        <p className='my-4'>There's plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you. There's plenty of advice out there on how to get over a breakup...</p>
                        <button style={{ boxShadow: '4px 4px' }} className='border-2 border-black bg-[#ffc7cb] hover:bg-[#ff9e9a] hover:transition hover:duration-500 hover:scale-105 px-6 py-4 mt-4 font-medium'>Download App</button>
                    </div>
                </div>
                <div className='col-span-4 flex bg-[#ffccca]'>
                    <div className='lg:w-[800px] flex justify-end'>
                        <img src="https://i.ibb.co.com/FbFLB36/10075774-removebg-preview.png" alt="10075774-removebg-preview" border="0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindYourLove;