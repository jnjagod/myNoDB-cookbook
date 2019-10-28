import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import NewCard from './components/NewCard/NewCard'
import Recipes from './components/Recipes/Recipes'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/new' component={NewCard} />
    <Route path='/recipes' component={Recipes} />
  </Switch>
)