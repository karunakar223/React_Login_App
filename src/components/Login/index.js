// Write your code here
import './index.css'

const Login = props => {
  const {loggedIn} = props

  return (
    <button type="button" className="btnLogin" onClick={loggedIn}>
      Login
    </button>
  )
}

export default Login
