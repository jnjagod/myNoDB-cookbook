import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='container'>
        <section className='nav panel' >
          <div className='nav-buttons'>
            <Link to='/recipes'>
              <button style={{ width: '135px', marginBottom: '20px' }} className='recipe-button'>Recipes</button>
            </Link>
            {/* <button>Recipes By Author</button> */}
            <Link to='/new'>
              <button style={{ width: '135px', marginBottom: '20px' }}>Add Recipe</button>
            </Link>
          </div>
        </section>
        <div className="img-wrap">
          <div className="panel img-container">
            <h1 className='top cat-words'>Welcome</h1>
            <img className='panel welcome-cat' src="https://i.imgur.com/xFsK59T.jpg" alt="" />
            <h1 className='cat-words bottom'>To Food!</h1>
          </div>
        </div>
      </div>
    )
  }
}