import React, { useEffect, useState } from 'react'
import './Sidber.css'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { db } from './firebase';

function Sidber() {
  const [{authUser,publicUsers,friend},dispatch]=useStateValue()
    const [user, setuser] = useState(null)
  useEffect(() => {
    // db.collection("publicUser").onSnapshot(snapshot=>{
    //     setuser(snapshot.docs.map(doc=>doc.data()))
    // })
    const newBaseRef = db.collection('base').doc()

    newBaseRef.onSnapshot(doc => {
      console.log('Current data: ', doc.data())
    }, function (error) {
      throw error // THIS ALWAYS GETS HIT
    })
  }, [])

    return (
        <div className="sidebar__container__main">
            <div className="sidebar__container__header">
                <div className="sidebar__header" >
                    <div className="sidebar__header">
                        <div className="sidebar__avater__contianer">
                            <div><IconButton><Avatar src={authUser.photoURL} alt="" /></IconButton> </div>
                            <div> <h3>Chats</h3> </div>
                        </div>
                        <div className="sidebar__profile__contianer">
                            <div><IconButton><MoreHorizIcon /> </IconButton></div>
                            <div><IconButton><VideoCallIcon /> </IconButton></div>
                            <div><IconButton><CreateIcon /></IconButton> </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar__header__search" >
                    <div className="sidebar__header__input">
                        <CreateIcon className="sidebar__header__search__icon"/>
                        <input type="text" placeholder="Search your friends to chat" />
                    </div>
                </div>
                <div className="sidebar__header__profile__container">

                    <div className="sidebar__header__self" onClick={() => {
                        if(authUser){
                            dispatch({
                                type:actionTypes.SET__FRIEND,
                                friend:authUser,
                            })}
                        }}>
                        <div className="sidebar__header__username__contianer">
                            <div><Avatar src={authUser.photoURL}/></div>
                            <div>
                                <div><strong><p>{authUser.displayName}</p></strong></div>
                                <div><p>last messege</p></div>
                            </div>
                        </div>
                        <div className="sidebar__header__userLastSeenIcon" >
                            <div className="sidebar__header__userLastSeenIcon__round__hoever"><MoreHorizIcon /></div>
                            <div className="sidebar__header__userLastSeenIcon__image"><img src={authUser.photoURL} /></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidber
