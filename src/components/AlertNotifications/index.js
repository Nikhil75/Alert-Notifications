import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    const style = {fontSize: '5vh', color: '#2dca73'}
    const error = {fontSize: '5vh', color: '#ff0b37'}
    const warning = {fontSize: '5vh', color: '#ffb800'}
    const info = {fontSize: '5vh', color: '#0f81e0'}
    const fileClose = {fontSize: '5vh'}

    return (
      <div className="app-container">
        <h1 className="noti-head">Alert Notifications</h1>

        <Notification>
          <div className="Notifications-container">
            <div className="wrap">
              <div className="icon">
                <AiFillCheckCircle style={style} />
              </div>
              <div className="text">
                <h1 className="sucsess">Success</h1>
                <p className="text-content">
                  You can access all the files in the folder
                </p>
              </div>
            </div>
            <div className="file-close-icons">
              <GrFormClose style={fileClose} />
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="Notifications-container">
            <div className="wrap">
              <div className="icon">
                <RiErrorWarningFill style={error} />
              </div>
              <div className="text">
                <h1 className="Error">Error</h1>
                <p className="text-content">
                  Sorry, you are not authorized to have access to delete the
                  file
                </p>
              </div>
            </div>
            <div className="file-close-icons">
              <GrFormClose style={fileClose} />
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="Notifications-container">
            <div className="wrap">
              <div className="icon">
                <MdWarning style={warning} />
              </div>
              <div className="text">
                <h1 className="Warning">Warning</h1>
                <p className="text-content">
                  Viewers of this file can see comments and suggestions
                </p>
              </div>
            </div>
            <div className="file-close-icons">
              <GrFormClose style={fileClose} />
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="Notifications-container">
            <div className="wrap">
              <div className="icon">
                <MdInfo style={info} />
              </div>
              <div className="text">
                <h1 className="Info">Info</h1>
                <p className="text-content">
                  Anyone on the internet can view these files
                </p>
              </div>
            </div>
            <div className="file-close-icons">
              <GrFormClose style={fileClose} />
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
