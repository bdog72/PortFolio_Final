import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import '../styles/reactrouter.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class ReactRouter extends Component {
  render () {
    const Example1 = () => (
      <div>
        <h2 className='entities'>&spades;</h2>
      </div>
          )

    const Example2 = () => (
      <div>
        <h2 className='entities'>&clubs;</h2>
      </div>
    )

    const Example3 = () => (
      <div>
        <h2 className='entities'>&hearts;</h2>
      </div>
    )

    const Example4 = () => (
      <div>
        <h2 className='entities'>&diams;</h2>
      </div>
    )
    const BasicExample = () => (
      <Router>
        <Jumbotron>
          <div>
            <ul>
              <li><Link to='/'><h2>SPADES</h2></Link></li>
              <li><Link to='/example2'><h2>CLUBS</h2></Link></li>
              <li><Link to='/example3'><h2>HEARTS</h2></Link></li>
              <li><Link to='/example4'><h2>DIAMONDS</h2></Link></li>
            </ul>
            <hr />
            <Route exact path='/' component={Example1} />
            <Route path='/example2' component={Example2} />
            <Route path='/example3' component={Example3} />
            <Route path='/example4' component={Example4} />
          </div>
        </Jumbotron>
      </Router>
    )
    return <div>
      <BasicExample />
    </div>
  }
}

    // const Topic = ({ match }) => (
    //   <div>
    //     <h3>{match.params.topicId}</h3>
    //   </div>
    // )

    // const Topics = ({ match }) => (
    //   <div>
    //     <h2>Topics</h2>
    //     <ul>
    //       <li>
    //         <Link to {`${match.url}/rendering`}>
    //           Rendering with React
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to={`${match.url}/components`}>
    //           Components
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to={`${match.url}/props-v-state`}>
    //           Props v. State
    //         </Link>
    //       </li>
    //     </ul>
    //         <Route path={`${match.url}/:topicId`} component={Topic}/>
    //         <Route exact path={match.url} render={() => (
    //           <h3>Please select a topic</h3>
    //     )} />
    //   </div>
    // )
