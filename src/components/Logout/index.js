// Write your code here
import './index.css'

const Logout = props => {
  const {loggedOut} = props

  return (
    <button type="button" className="btnLoggedOut" onClick={loggedOut}>
      Logout
    </button>
  )
}

export default Logout
