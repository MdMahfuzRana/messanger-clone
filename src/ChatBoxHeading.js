import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import "./ChatBoxHeading.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useStateValue } from './StateProvider';

function ChatBoxHeading() {
  const [{authUser,friend},dispatch]=useStateValue()

    return (
        <div className="ChatBoxHeading__main">
           <div className="ChatBoxHeading__status">
               <div>
                   <Avatar src={friend.photoURL} />
               </div>
               <div>
                   <div><strong><p>{friend.displayName}</p></strong></div>
                   <div><p>Name</p></div>
               </div>
            </div> 
           <div className="ChatBoxHeading__event">
               <div>
                   <IconButton>
                        <CallIcon color="primary" />
                   </IconButton>
                </div>
               <div>
                   <IconButton>
                        <VideocamIcon color="primary" />
                   </IconButton>
               </div>
                 <div>
                     <IconButton>
                        <MoreHorizIcon color="primary"/>
                   </IconButton>
                </div>
            </div> 
        </div>
    )
}

export default ChatBoxHeading
