import React from 'react';
import Marquee from "react-fast-marquee";

const services = [
    {
        name: 'Digital product design'
    },
    {
        name: 'Remote work'
    },
    {
        name: 'UX design'
    },
    {
        name: 'Distributed teams'
    },
    {
        name: 'Creativity'
    },
    {
        name: 'Strategy'
    },
    {
        name: 'Suspense'
    },
    {
        name: 'Growth'
    },
]
const Footer = () => {
    return (
        <section className="bg-black py-2">
            <Marquee className='text-white'>
                <ul className='flex gap-x-6 justify-around'>
                    {services.map((service, i) => <li key={++i} className='text-xl odd:font-bold uppercase even:font-normal'>{service.name}</li>)}
                </ul>
            </Marquee>
            <div className='mt-20 sm:mt-24 text-white max-w-[287px] sm:max-w-md mx-auto'>
                <div className='flex justify-center px-5 sm:px-0'>
                    <img src="/logo/nordic-rose-white.png" alt="logo" />
                </div>
                <div className='mt-8'>
                    <p className='text-xs sm:text-[16px] text-center font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                    </p>
                </div>
                <ul className='flex justify-center gap-x-8 font-medium text-xs sm:text-[16px] mt-5'>
                    <li>
                        <a className='underline' href="https://twitter.com/">Twitter</a>
                    </li>
                    <li>
                        <a className='underline' href="https://linkedin.com/">Linkedin</a>
                    </li>
                    <li>
                        <a className='underline' href="https://rss.com/">RSS</a>
                    </li>
                </ul>
            </div>
           <div className='flex justify-center pb-7 pt-14'>
             <div className='text-center w-[180px] text-white text-xs '>
                <p className=''>
                    © 2012–2020 Nordic Rose Co.
                </p>
                <p>All rights reserved. </p>
            </div>
           </div>
        </section>
    )
}

export default Footer