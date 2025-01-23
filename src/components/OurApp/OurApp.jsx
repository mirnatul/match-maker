import React from 'react';

const OurApp = () => {
    return (
        <div className='lg:my-20 bg-[#fcfcbb] px-2 md:py-28 py-12 overflow-hidden'>

            <div className='grid lg:grid-cols-3 max-w-7xl mx-auto'>
                <div className='col-span-2 z-10'>
                    <p className="text-4xl md:text-5xl font-bold mb-8">
                        How Our App <span className='text-[#ffc7cb]'>Work?</span>
                    </p>
                    <p className='max-w-[520px]'>
                        We committed to helping singles find love every day and we are confident in our ability to do so. eharmony matches single women and men for lasting and fulfilling relationships.
                    </p>
                    <div className='grid md:grid-cols-2 gap-6 mt-10'>
                        <div style={{ boxShadow: '6px 6px' }} className='border-2 border-black p-4 bg-[#b8fffc]'>
                            <button className='btn btn-circle bg-[#00000015] font-bold text-lg border-none'>1</button>
                            <h3 className='font-bold text-lg my-2'>Download App</h3>
                            <p className='my-2 text-sm text-slate-600'>Thousands of singles find love through our dating sites each month. Register today</p>
                        </div>
                        <div className='border-2 border-black p-4 bg-[#b8fffc]'>
                            <button className='btn btn-circle bg-[#00000015] font-bold text-lg border-none'>2</button>
                            <h3 className='font-bold text-lg my-2'>Create Account</h3>
                            <p className='my-2 text-sm text-slate-600'>Thousands of singles find love through our dating sites each month. Register today</p>
                        </div>
                        <div className='border-2 border-black p-4 bg-[#b8fffc]'>
                            <button className='btn btn-circle bg-[#00000015] font-bold text-lg border-none'>3</button>
                            <h3 className='font-bold text-lg my-2'>Fill Profile</h3>
                            <p className='my-2 text-sm text-slate-600'>Thousands of singles find love through our dating sites each month. Register today</p>
                        </div>
                        <div className='border-2 border-black p-4 bg-[#ffcbff]'>
                            <button className='btn btn-circle bg-[#00000015] font-bold text-lg border-none'>4</button>
                            <h3 className='font-bold text-lg my-2'>Start Swiping</h3>
                            <p className='my-2 text-sm text-slate-600'>Thousands of singles find love through our dating sites each month. Register today</p>
                        </div>
                    </div>
                </div>
                <img className='col-span-1 lg:self-end lg:scale-150 scale-90' src="https://i.ibb.co.com/Y7CxQdN/vector-animal-silhouette-illustration-design-1252102-26623-Photoroom.png" alt="" />
            </div>
        </div>
    );
};

export default OurApp;