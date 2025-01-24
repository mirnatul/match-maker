import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './UserReview.css'

const UserReview = () => {
    const reviews = [
        {
            description: "Hinge's prompts really made the difference - I felt like I got a good sense of a guy's vibe from his answers, and it way easy to jump right into real conversation.",
            author: "Helena Ann"
        },
        {
            description: "Bumble's question prompts were a game changer for me! They gave me just enough insight into someone's personality to know if we'd vibe. Natural and way less awkward.",
            author: "Sophia Grace"
        },
        {
            description: "The prompts on Coffee Meets Bagel made it so much easier to connect. They were thoughtful and creative, which of someone's personality without the usual small talk.",
            author: "Lila Rose"
        },
    ]

    return (
        <div className='my-24 max-w-7xl mx-auto'>
            <div className='flex items-center'>
                <p className="text-3xl md:text-5xl font-bold pl-2">
                    What Our <span className='text-[#ffc7cb]'>Users Say</span>
                </p>
                <img className='w-[40px] md:w-[50px] ml-6 md:ml-10' src="https://i.ibb.co.com/tqbk97P/vecteezy-star-shape-icon-9266315.png" alt="" />

            </div>
            <div className="w-full h-full px-4 mt-16">
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ type: "progressbar" }}
                    navigation
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide>
                            <div className='mb-10 lg:px-10 px-0 pt-0'>
                                <div className='flex justify-center items-center'>
                                    <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                        <img className='lg:w-28 w-24 relative -ml-12 mb-12' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                                        <p className='md:text-2xl text-lg max-w-[1200px] mb-10'>{review.description}</p>
                                        <p className='font-bold text-[#ff8a86]'>{review.author}</p>
                                    </div>
                                    <div>
                                        <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                    {/* <SwiperSlide>
                        <div className='mb-2 lg:mb-10 lg:px-10 px-2 py-4'>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <img className='w-28 relative -ml-12 mb-12' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                                    <p className='md:text-2xl text-xl max-w-[1200px] mb-10'>Hinge's prompts really made the difference - I felt like I got a good sense of a guy's vibe from his answers, and it way easy to jump right into real conversation.</p>
                                    <p className='font-bold text-[#f9aba9]'>Helena Ann</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-2 lg:px-10 px-2 py-4'>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <img className='w-28 relative -ml-12 mb-12' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                                    <p className='md:text-2xl text-xl max-w-[1200px] mb-10'>Bumble's question prompts were a game changer for me! They gave me just enough insight into someone's personality to know if we’d vibe. Plus, it made starting a conversation feel natural and way less awkward.</p>
                                    <p className='font-bold text-[#f9aba9]'>Sophia Grace</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-2 lg:px-10 px-2 py-4'>
                            <div className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center bg-white text-lg h-full px-16">
                                    <img className='w-28 relative -ml-12 mb-12' src="https://i.ibb.co.com/HG2LnSv/3520789-middle-Photoroom.png" alt="" />
                                    <p className='md:text-2xl text-xl max-w-[1200px] mb-10'>The prompts on Coffee Meets Bagel made it so much easier to connect. They were thoughtful and creative, which helped me get a glimpse of someone's personality without the usual small talk. It felt genuine right from the start!</p>
                                    <p className='font-bold text-[#f9aba9]'>Lila Rose</p>
                                </div>
                                <div>
                                    <img className='hidden md:block mr-12' src="https://i.ibb.co.com/b1ZBDxs/like-sign-success-approval-joy-happiness-concept-225067-71-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default UserReview;