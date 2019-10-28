import React from 'react'
import './Header.css'

export default function Header() {
  return(
    <header className='panel'>
      <h1>CookBook</h1>
      <div className='joke'>
        <i className="fas fa-book-open fa-4x"></i>
        <i className="fas fa-book-dead fa-4x"></i>
      </div>
    </header>
  )
}