import React from 'react';
import SingleArticle from './SingleArticle';
import './Article'

const Article = () => {

    const articles = [
        {
            photoUrl: "https://i.ibb.co.com/sq3BWY5/Joey-Chu-Square-love-3.png",
            title: "Getting Over the Fantasy of Dating Someone",
            description: "There's plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you..."
        },
        {
            photoUrl: "https://i.ibb.co.com/mCbgSSL/illustration-man-woman-embracing-sketch-watercolor-square-1026535-5659.jpg",
            title: "6 Strategies to Increase Your Vulnerability While Dating",
            description: "There's plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you..."
        },
        {
            photoUrl: "https://i.ibb.co.com/NZw3msf/vecteezy-cute-and-romantic-couple-close-up-face-with-heart-18878924.jpg",
            title: "Getting Over the Fantasy of Dating Someone",
            description: "There's plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you..."
        },
    ]


    return (
        <div className='lg:my-20 my-8 max-w-7xl mx-auto'>
            <p className="text-5xl font-bold text-center">
                Our <span className='text-[#ffccca]'>Aritcles & Tips</span> Update
            </p>
            <div className='text-center mt-4'>
                <p>We committed to helping singles find love every day and we are <br /> confident in our ability to do so. Enharmony matches single</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-2 px-1 justify-center mt-8 mb-8'>
                {
                    articles.map(article => <SingleArticle article={article}></SingleArticle>)
                }
            </div>
            <div className='text-center'>
                <button style={{ boxShadow: '4px 4px' }} className='border-2 border-black bg-[#ffccca] hover:bg-[#ff9e9a] hover:transition hover:duration-500 hover:scale-105 px-6 py-4 font-medium'>View more articles</button>
            </div>
        </div>
    );
};

export default Article;