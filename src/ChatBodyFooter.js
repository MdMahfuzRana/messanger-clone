import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './ChatBodyFooter.css'
import SendIcon from '@mui/icons-material/Send';
import { useStateValue } from './StateProvider';

function ChatBodyFooter() {
    const [message, setmessage] = useState(null)
    const [{authUser,friend},dispatch]=useStateValue()

    const sendmessage = ()=>{
        console.log(message)
        if(friend){
            friend.docs(friend.id).collection("messages").add({
                displayName:friend.displayName,
                imageURL:friend.photoURL,
                message:message,
            })
        }
    }
    return (
        <div className="ChatBodyFooter__main">
            <div className="ChatBodyFooter__inputer__box">
                <div className="inputer"><input onChange={(e)=>{setmessage(e.target.value())}} type="text" className="" placeholder="Type something..." /></div>
            </div>
            <div className="ChatBodyFooter__sender__box">
                <IconButton>
                    <SendIcon onClick={sendmessage} color="primary"/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatBodyFooter
