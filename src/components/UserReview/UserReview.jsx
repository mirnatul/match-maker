import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './UserReview.css'

const UserReview = () => {
    const img = <img src='' />

    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <div className='flex items-center'>
                <p className="text-5xl font-bold pl-2">
                    What Our <span className='text-[#ffccca]'>Users Say</span>
                </p>
                <img className='w-[50px] ml-10' src="https://i.ibb.co.com/tqbk97P/vecteezy-star-shape-icon-9266315.png" alt="" />

            </div>
            <div className="w-full h-full px-2 mt-12">
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ type: "progressbar" }}
                    navigation
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='mb-12 mt-4'>
                            <div className=''>
                                <img className='w-28 relative -ml-4' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <p className='md:text-2xl text-2xl max-w-[1200px] mb-12'>Hinge's prompts really made the difference - I felt like I got a good sense of a guy's vibe from his answers, and it way easy to jump right into real conversation.</p>
                                    <p className='font-bold text-[#f9aba9]'>Helena Ann</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-12 mt-4'>
                            <div className=''>
                                <img className='w-28 relative -ml-4' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <p className='md:text-2xl text-2xl max-w-[1200px] mb-12'>Bumble's question prompts were a game changer for me! They gave me just enough insight into someone's personality to know if we’d vibe. Plus, it made starting a conversation feel natural and way less awkward.</p>
                                    <p className='font-bold text-[#f9aba9]'>Sophia Grace</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-12 mt-4'>
                            <div className=''>
                                <img className='w-28 relative -ml-4' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <p className='md:text-2xl text-2xl max-w-[1200px] mb-12'>The prompts on Coffee Meets Bagel made it so much easier to connect. They were thoughtful and creative, which helped me get a glimpse of someone's personality without the usual small talk. It felt genuine right from the start!</p>
                                    <p className='font-bold text-[#f9aba9]'>Lila Rose</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default UserReview;