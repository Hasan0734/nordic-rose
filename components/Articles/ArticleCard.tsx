import React from 'react';


const ArticleCard = ({article}:any) => {
    return (
        <div className=''>
            <div className=''>
                <img className='object-cover w-full' src={article.image} alt="" />
            </div>
            <div className='pt-5 px-4'>
                <p className='font-medium text-[22px] leading-[26px] text-center'>{article.body}</p>
            </div>
        </div>
    );
};

export default ArticleCard;