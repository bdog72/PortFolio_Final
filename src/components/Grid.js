import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
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
      <header><h1>{this.state.name}</h1>
        <Image src={this.state.imageURL} responsive circle />
      </header>
      <aside className='sidebar-right'>
        <h1>R Sidebar</h1>
      </aside>
      <article>
        <a href='https://github.com/bdog72'>
          <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
        </a>
      </article>
      <aside className='sidebar-left'>
        <h1>L Sidebar</h1>
      </aside>
      <footer>
        <p>813-505-4733</p>
        <p>high5bri&#64;hotmail.com</p>
        <p>Made With &hearts; From What I Learned At The Iron Yard</p>
      </footer>
    </div>
  }
}
