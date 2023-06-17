import React from 'react'
import { Link } from 'react-router-dom'

export const Links = () => {
  return (
    <div>
    <Link to="/search">
        Search
    </Link>
        <Link to="/imagesearch">
            Images
        </Link>
    </div>
  )
}
