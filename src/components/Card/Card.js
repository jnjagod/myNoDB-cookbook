import React, { Component } from 'react'
// import ContentEditable from 'react-contenteditable'
import './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props)
    let {title, info, author} = this.props.selectedRecipe
    this.state = {
      title,
      info,
      author,
      edit: false
    }
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  updateClick = () => {
    let { title, info, author } = this.state
    let updatedCard = { ...this.props.selectedRecipe, title, info, author }
    this.props.updateCard(updatedCard)
  }

  render() {
    let { id, title, info, author } = this.props.selectedRecipe
    return (
      <div className='card-container'>
        <div className='card panel'>
          <div className='recipe-title'>
            {/* <ContentEditable name='title' tagName='h1' html={this.state.html} disabled={this.state.edit} onChange={(e) => this.handleChange2(e)} /> */}
            {
              !this.state.edit ?
                <h1>{title}</h1>
                :
                <input value={this.state.title} size='50' autoComplete='off' style={{margin: '30px 0px'}} name='title' onChange={this.handleChange} type="text" />
            }
          </div>
          <div className='text-box'>
            {
              !this.state.edit ?
              <textarea cols="110" rows="18" readOnly='true'>{info}</textarea>
              :
              <textarea value={this.state.info} name="info" cols="110" rows="18" onInput={this.handleChange}>{info}</textarea>
            }
          </div>
          <div className='recipe-bottom-box'>
            <div className='recipe-button-box'>
              {
                !this.state.edit ?
                  <button onClick={() => this.toggleEdit()}>Edit</button>
                  :
                  <button onClick={() => {
                    this.toggleEdit();
                    this.updateClick(id);
                    this.props.showAllRecipes()
                  }}>Done</button>
              }
              <button onClick={() => { this.props.deleteCard(id); this.props.showAllRecipes() }}>Delete</button>
            </div>
            <div>
              {
                !this.state.edit ?
                <h3>{author}</h3>
                :
                <input value={this.state.author} name='author' autoComplete='off' onChange={this.handleChange} type="text"/>
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}