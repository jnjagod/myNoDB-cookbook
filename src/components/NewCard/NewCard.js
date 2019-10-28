import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './NewCard.css'

export default class NewCard extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      info: '',
      author: '',
      recipes: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/recipes')
      .then(res => {
        this.setState({ recipes: res.data })
      })
      .catch(err => console.log(err))
  }

  addRecipe = newCard => {
    axios
      .post('/api/recipes', newCard)
      .then(res => {
        this.setState({
          recipes: res.data
        })
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  addClick = () => {
    let { title, info, author } = this.state
    let newCard = {
      title,
      info,
      author
    }
    this.addRecipe(newCard)

  }

  render() {
    return (
      <div className='card-container'>
        <div className="new-card panel">
          <div className='title-box'>
            <input placeholder='Title' autoComplete='off' name='title' onChange={this.handleChange} type="text" size='100' />
          </div>
          <textarea placeholder='Instructions' autoComplete='off' name='info' onInput={this.handleChange} className='info' type="text" />
          <div className='recipe-bottom-box'>
            <div className='recipe-button-box'>
              <Link to='/recipes'>
                <button onClick={this.addClick} style={{ marginRight: '25px' }}>Create</button>
              </Link>
              <Link to='/'>
                <button style={{ marginRight: '250px' }}>Cancel</button>
              </Link>
            </div>
            <input placeholder='Author' autoComplete='off' name='author' onChange={this.handleChange} type="text" size='30' />
          </div>
        </div>
      </div>
    )
  }
}