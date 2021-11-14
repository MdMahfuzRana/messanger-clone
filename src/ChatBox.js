import React from 'react'
import ChatBody from './ChatBody'
import ChatBodyFooter from './ChatBodyFooter'
import './ChatBox.css'
import ChatBoxHeading from './ChatBoxHeading'

function ChatBox() {
    return (
        <div className="ChatBox__main__container">
            <div>
                <ChatBoxHeading />
            </div>
            <div>
                <ChatBody />
            </div>
            <div>
                <ChatBodyFooter />
            </div>
        </div>
    )
}

export default ChatBox
