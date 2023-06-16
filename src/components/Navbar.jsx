import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = ({darkTheme,setDarkTheme}) => {
    return (
        <div className='p-5 pb-5 flex flex-wrap border-b dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/">
                    <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:text-gray-900'>
                        Google
                    </p>
                </Link>
                
                <button onClick={()=>setDarkTheme(!darkTheme)} className='text-lg bg-gray-900 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-1'>
                        {darkTheme ? '💡' : '🌙'}
                </button>
                
            </div>
            <Search />
        </div>

    )
}
