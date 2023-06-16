import React from 'react'
import { Route, Redirect, Routes } from 'react-router-dom';
import { Search } from './Search';
import { Results } from './Results';

export const Container = () => {
  return (
    <div className='p-4'>
      <Routes>

      <Route exact path="/search" element={<Results />} />
        <Route exact path="/imagesearch" element={<Results />} />
      </Routes>
    </div>
  )
}
