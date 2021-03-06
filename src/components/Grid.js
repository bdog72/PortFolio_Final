import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
import { Image } from 'react-bootstrap'
import '../../src/styles/grid.scss'

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
      <header>
        <div className='head1'>
          <h1>{this.state.name}</h1>
          <div className='proPic'>
            <Image src={this.state.imageURL} responsive circle />
          </div>
        </div>
        <p>{this.state.bio}</p>
        <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
      </header>
      <aside className='sidebar-right'>
        {/* <p>I Also Learned At <br /> <img src='https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg' alt='' /></p> */}
        <h1 className='rR2'>React Router</h1>
        <ReactRouter />
        {/* <ul className='skills1'>
          <li><Image src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills1'>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills1'>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/free_windows7_icons_emoticons/64/clown.png' responsive /></li>
        </ul> */}
      </aside>
      <article>
        <p>Follow Me On Twitter</p>
        <div className='tweet'>
          <a href='https://twitter.com/Bdoggy72'>
            <Image src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/twitter-128.png' responsive />
          </a>
        </div>
        <p>My Current GitHub Chart</p>
        <div className='tweet'>
          <a href='https://github.com/bdog72'>
            <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
      </article>
      <aside className='sidebar-left'>
        <p>Some Of The Skills I Learned At <br /> <img src='https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg' alt='' /></p>
        <ul className='skills1'>
          <li><Image src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills1'>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills1'>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/free_windows7_icons_emoticons/64/clown.png' responsive /></li>
        </ul>
      </aside>
      <footer>
        <p>813-505-4733</p>
        <p>high5bri&#64;hotmail.com</p>
        <p>Made With &hearts; From What I Learned At The Iron Yard</p>
      </footer>
    </div>
  }
}
