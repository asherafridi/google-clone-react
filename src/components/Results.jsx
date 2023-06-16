import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Loading } from './Loading'

import { useResultContext } from '../contexts/ResultContextProvider'

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
    


    useEffect((setSearchTerm) => {
        getResults(`${location.pathname}?q=${searchTerm}&num=20`);
    }, [searchTerm,location.pathname]);

    console.log(location.pathname);

    console.log(results);

    if (isLoading) return <Loading />;


    switch (location.pathname) {
        case "/search":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {
                        results?.items?.map(({ link, title, snippet }, index) => (
                            <div className='md:w-2/5 w-full'>
                                <a href={link} target='_blank'>
                                    <p className='text-sm'>
                                        {link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                        {title}
                                    </p>
                                    <p className='text-sm'>
                                        {snippet}
                                    </p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            );
            break;
        case "/imagesearch":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {
                        results?.items?.map(({ contextLink, originalImageUrl, title, thumbnailImageUrl}, index) => (
                            <div className='p-3 border shadow-sm dark:border-gray-700 rounded-sm' key={index}>
                                <a href={originalImageUrl} target='_blank'>
                                    <img src={thumbnailImageUrl}/>
                                    
                                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                        {title.length > 20 ? title.substring(0,20) : title}
                                    </p>
                                    <p className='text-sm'>
                                        {contextLink.length > 30 ? contextLink.substring(0,20) : contextLink}
                                    </p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            )
            break;
        default:
            return 'ERROR!';
            break;

    }
}
