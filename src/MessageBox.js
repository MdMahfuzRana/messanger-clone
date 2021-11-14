import React from 'react'
import './MessageBox.css'
import Sidber from './Sidber'
import ChatBox from './ChatBox'
import ChatBoxDemoMessage from './ChatBoxDemoMessage'
import { useStateValue } from './StateProvider'


function MessageBox() {
  const [{authUser,friend},dispatch]=useStateValue()

  console.log("this is the our expected Friend ? " + friend )
    return (
        <div className="messenger__box">
            <div className="message__sidebar">
                <Sidber/>
            </div>
            <div className="message__box">
{friend?        (<ChatBox />):
                (<ChatBoxDemoMessage />)}
            </div>
        </div>
    )
}

export default MessageBox
