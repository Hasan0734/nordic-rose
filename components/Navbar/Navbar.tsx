import { useRouter } from 'next/router';
import React, { useState } from 'react';


const menus = [
    { title: 'Blog', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Links', link: '/links' },
    { title: 'Projects', link: '/projects' },
]

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { pathname } = useRouter();

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='relative'>
            <nav className=' container mx-auto px-6 2xl:px-0 border-b border-gray-400 '>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <img className='max-w-[217px] md:max-w-[250px] py-8' src='/logo/nordic-rose.png' />
                    </div>
                    <div>
                        <div className='hidden sm:block'>
                            <ul className=' flex items-center gap-4'>
                                {menus.map((menu, i) => <li key={++i}>
                                    <a
                                        className={`link ${pathname === menu.link ? 'active-link' : ''}`}
                                        href="#">{menu.title}</a>
                                </li>)}
                            </ul>
                        </div>

                        <div className='block sm:hidden'>
                            <button onClick={handleToggle} className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15" fill="none">
                                    <line y1="0.5" x2={24} y2="0.5" stroke="black" />
                                    <line y1="7.5" x2={24} y2="7.5" stroke="black" />
                                    <line y1="14.5" x2={24} y2="14.5" stroke="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


            </nav>

            <div onClick={handleToggle}
                className={`fixed duration-500 transition ${toggle ? 'inset-0 bg-black w-full' : 'w-0 top-0 bottom-0 -right-[999px]'} bg-opacity-25 opacity-100`}>
            </div>
            <div className={`fixed top-0 bottom-0 transition duration-500 ${toggle ? 'right-0' : 'w-0 -right-[9999px]'} overflow-y-auto flex justify-end`} >
                <div className='bg-white p-4 min-w-[300px]'>
                    <div className='flex justify-end'>
                        <button onClick={handleToggle} className='border border-black
                         rounded-full p-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" 
                             strokeWidth={1.5} stroke="currentColor"
                              className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <ul className=''>
                        {menus.map((menu, i) => <li className=' border-b' key={++i}>
                            <a
                                className={`px-2 block py-2 uppercase font-medium text-[20px]`}
                                href="#">{menu.title}</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;