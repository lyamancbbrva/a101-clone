function Header() {
    return (
        <header>
            <div className='bg-[#40D3E7] p-2 relative flex items-center justify-center gap-[5px] '>
                <div className='rounded-[5px] w-[125px] px-4 py-2 bg-[#DAFBFF] '>
                    <a href=''>
                        <img
                            className='bg-[#DAFBFF] w-full'
                            src='src/assets/a101-logo.webp'
                            alt='a101 logo'
                        />
                    </a>
                </div>
                <div className='rounded-[5px] w-[130px] px-4 py-2 bg-[#F3F6FA] '>
                    <a href=''>
                        <img
                            className='bg-[#DAFBFF] w-full '
                            src='src/assets/extra-logo.webp'
                            alt='a101 logo'
                        />
                        <div className='absolute bottom-[-1px] right-[31.5%]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='151'
                                height='14'
                                viewBox='0 0 151 14'
                                fill='none'
                            >
                                <path
                                    d='M151 14L0 14L2 14C5.72256 14 7.58384 14 9.09017 13.5106C12.1345 12.5214 14.5214 10.1345 15.5106 7.09017C16 5.58384 16 3.72256 16 0V0L141 0V4C141 9.52285 145.477 14 151 14V14Z'
                                    fill='#f3f6fa'
                                ></path>
                            </svg>
                        </div>
                    </a>
                </div>
                <div className='rounded-[5px] w-[125px] px-4 py-2 bg-[#DAFBFF] '>
                    <a href=''>
                        <img
                            className='bg-[#DAFBFF] w-full '
                            src='src/assets/kapida-logo.webp'
                            alt='a101 logo'
                        />
                    </a>
                </div>
            </div>
            <fieldset className='flex justify-center space-y-1 dark:text-gray-800'>
                <label htmlFor='Search' className='hidden'>
                    Search
                </label>
                <div className='relative w-[90%] '>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button
                            type='button'
                            title='search'
                            className='p-1 focus:outline-none focus:ring'
                        >
                            <svg
                                fill='currentColor'
                                viewBox='0 0 512 512'
                                className='w-4 h-4 dark:text-gray-800'
                            >
                                <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type='search'
                        name='Search'
                        placeholder='Search...'
                        className='w-full my-[8px] rounded-full p-2 pl-10 border-[1px] border-[#e5e7e9] text-sm sm:w-auto focus:outline-none  dark:text-gray-800 '
                    />
                </div>
            </fieldset>
        </header>
    );
}

export default Header;
