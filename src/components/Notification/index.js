import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const getProps = props

  return (
    <div className="container">
      <p className="children">{getProps.children}</p>
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
