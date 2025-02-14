import React from 'react';

const FeatureBox = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <div className='grid lg:grid-cols-3 justify-center mx-2'>
                <div className='bg-[#e3fbff] lg:border-b-2 border-t-2 border-l-2 border-r-2 lg:border-r-0 border-black px-6 md:py-10 py-6'>
                    <div className='md:h-[100px] h-[80px]'>
                        <img className='lg:w-24 w-20' src="https://i.ibb.co.com/WDmwbSB/icons8-settings-480-Photoroom.png" alt="" />
                    </div>
                    <h1 className='text-2xl md:text-4xl font-bold my-3'>Efficient</h1>
                    <p className='text-slate-600'>Thousands of singles find love through our dating sites each month. Register today to find that special someone on EliteSingles.</p>
                </div>
                <div className='bg-[#fcfcbb] lg:border-b-2 border-t-2 border-l-2 border-r-2 lg:border-r-0 border-black px-6 md:py-10 py-6'>
                    <div className='md:h-[100px] h-[80px]'>
                        <img className='lg:w-28 w-24' src="https://i.ibb.co.com/qWwT8tD/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTA1-L2pv-Yjcz-MC0w-MDUtc-C5wbmc-Photoroom.png" alt="" />
                    </div>
                    <h1 className='text-2xl md:text-4xl font-bold my-3'>Balance</h1>
                    <p className='text-slate-600'>Thousands of singles find love through our dating sites each month. Register today to find that special someone on EliteSingles.</p>
                </div>
                <div className='bg-[#ffd8e6] border-b-2 border-t-2 border-l-2 border-r-2 border-black px-6 md:py-10 py-6'>
                    <div className='md:h-[100px] h-[80px]'>
                        <img className='lg:w-28 w-24' src="https://i.ibb.co.com/KjssVX2/il-794x-N-4190148573-3sif-Photoroom.png" alt="" />
                    </div>
                    <h1 className='text-2xl md:text-4xl font-bold my-3'>Smart Blocking</h1>
                    <p className='text-slate-600'>Thousands of singles find love through our dating sites each month. Register today to find that special someone on EliteSingles.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureBox;