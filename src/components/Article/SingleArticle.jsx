import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const SingleArticle = ({ article }) => {
    return (
        <div className='border-2 border-black max-w-[410px] p-3 body'>
            <img className='h-[350px] w-full' src={article.photoUrl} alt="" />
            <p className='my-2 font-bold text-xl'>{article.title}</p>
            <p className='my-2'>{article.description}</p>
            <button className='border-b-2 border-black flex items-center gap-2 font-semibold pr-3 py-2'>Read More <FaArrowRight></FaArrowRight></button>
        </div>
    );
};

export default SingleArticle;