// Write your code here
import './index.css'

const Message = props => {
  const {isLogIn} = props
  const msg = isLogIn ? 'Welcome User' : 'Please Login'
  return <h1 className="main-heading">{msg}</h1>
}

export default Message
