import React from 'react';

const HeroSection = () => {
    return (
        <section>
            <div className='sm:max-w-[854px] mx-auto  md:px-6 2xl:px-0 mt-10 md:mt-20 mb-12 md:mb-16'>
                <div>
                    <img className='w-full' src="/assets/hero-img.png" alt="" />
                </div>
                <div className='my-7 md:my-12 px-6 md:px-0'>
                    <h2 className='font-bold text-[36px]  md:text-[54px] text-center leading-[42px] md:leading-[54px]'>A few words about this blog platform, Ghost, and how this site was made</h2>
                    <div className='flex justify-center'>
                        <p className='md:w-1/2 mt-8 font-normal text-[16px] md:text-[20px] text-center leading-[27px] md:leading-[34px]'>
                            Why Ghost (& Figma) instead of Medium, WordPress or other options?
                        </p>
                    </div>
                </div>
                <div className='border border-black mx-16'></div>
            </div>
        </section>
    );
};

export default HeroSection;