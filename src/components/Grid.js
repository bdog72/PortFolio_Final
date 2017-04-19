import React, { Component } from 'raect'

export default class Grid extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      imageURL: '',
      bio: ''
    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/users/bdog72').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({name: data.name, location: data.location, imageURL: data.avatar_url, bio: data.bio})
    })
  }

  render () {
    return <div className='grid'>
      <header><h1>Header</h1></header>
      <aside className='sidebar-right'><h1>R Sidebar</h1></aside>
      <article><h1>Article</h1></article>
      <aside className='sidebar-left'><h1>L Sidebar</h1></aside>
      <footer><h1>Footer</h1></footer>
    </div>
  }
}
