import React from 'react';
import ArticleCard from './ArticleCard';

import { articles } from '@/utils/data';



const Articles = () => {
       
    return (
        <section>
            <div className='max-w-2xl mx-auto px-5 2xl:px-0'>
                <h2 className='text-[32px] sm:text-[44px] font-bold leading-[38px] sm:leading-[52px] text-center'>All articles</h2>
           
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-12'>
                   {articles.map((article, i) => <ArticleCard article={article}/>)}
                   
                </div>
            </div>
        </section>
    );
};

export default Articles;