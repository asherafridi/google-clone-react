import React from 'react'
import { Link } from 'react-router-dom'
import { Links } from './Links'

export const Search = () => {
  return (
    <div className='w-full'>
      <div className='mt-5  border-gray-200 dark:border-gray-700 border w-1/4 flex text-gray-700 dark:text-gray-200 p-2 px-5 rounded-full'>
        <input type="text" className='outline-none bg-transparent  w-full'></input>
        <button>
            Search
        </button>

      </div>
        <Links />
    </div>
  )
}
