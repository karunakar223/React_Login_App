// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogIn: false}

  getUserLoggedIn = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  getLoggedOutUserDetails = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLogIn={isLogIn} />
          {isLogIn ? (
            <Logout loggedOut={this.getUserLoggedIn} />
          ) : (
            <Login loggedIn={this.getLoggedOutUserDetails} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
