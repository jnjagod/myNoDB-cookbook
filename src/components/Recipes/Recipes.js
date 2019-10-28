import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '../Card/Card'
import './Recipes.css'

export default class Recipes extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      titles: true,
      selectedRecipe: {}
    }
  }

  componentDidMount() {
    axios
      .get('/api/recipes')
      .then(res => {
        this.setState({recipes: res.data})
      })
      .catch(err => console.log(err))
  }

  updateCard = card => {
    axios
      .put(`/api/recipes/${card.id}`, card)
      .then(res => this.setState({recipes: res.data}))
      .catch(err => console.log(err))
  }

  deleteCard = id => {
    axios.delete(`/api/recipes/${id}`)
    .then(res => this.setState({recipes: res.data}))
    .catch(err => console.log(err))
}

  showAllRecipes = () => {
    this.setState({titles: true})
  }

  showCard = (card) => {
    this.setState({
      titles: false,
      selectedRecipe: card
    })
  }

  render() {
    // let authorArr = this.state.recipes.sort((a, b) => a.author.localeCompare(b.author)).map(el => el.author)
    // let filterAuthorArr = authorArr.filter((el, i) => authorArr.indexOf(el) === i)
    return (
      <div className='container'>
        <nav className='nav panel' id='recipe-nav' >
          <div className='nav-buttons'>
            <button onClick={this.showAllRecipes} style={{width: '150px', margin: '20px 5px'}}>All Recipes</button>
            {/* <button onClick={this.showAuthors} >Sort By Author</button> */}
            <Link to='/new'>
            <button>Add Recipe</button>
            </Link>
            <Link to='/'>
              <button style={{width: '100px', marginTop: '20px'}}>Home</button>
            </Link>
          </div>
        </nav>
        {
          this.state.titles ?
          <div className='all-recipes container'>
            {this.state.recipes.map(el => (
              <div onClick={() => this.showCard(el)} className='thumb panel' key={el.id}>
                <img src="http://placekitten.com/200/200" alt=""/>
                <span className='title-span'>{el.title}</span>
              </div>
            ))}
          </div>
          :
          // <div className="container author-recipes" id=''>
          //   <div className="authors panel">
          //     {filterAuthorArr.map(el => (
          //       <div className="authors">
          //         <h2>{el}</h2>
          //       </div>
          //     ))}
          //   </div>
          // </div>
          <div className='container card-box'>
            <Card
            selectedRecipe={this.state.selectedRecipe}
            updateCard={this.updateCard}
            deleteCard={this.deleteCard}
            showAllRecipes={this.showAllRecipes}
            />
          </div>
        }
      </div>
    )
  }
}