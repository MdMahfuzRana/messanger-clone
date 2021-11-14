import React from 'react'
import './ragister.css'
import {Link } from "react-router-dom";
import {db,provider, auth, storage} from './firebase.js'
import {useStateValue} from './StateProvider.js'
import { actionTypes } from './reducer';

function Ragister() {

    const [{authUser,publicUsers},dispatch]=useStateValue()
    const login =(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then((result)=>(
            dispatch({
                type:actionTypes.SET__USER,
                authUser:result.user,
            })
        ))
        .catch((error)=>(alert(error.message)))
    }
    return (
        <div className="ragister__container__main">
            <div className="ragister__box__container">
                <div className="content__container">
                     <div className="logo__container"><img src="data:image/jpeg;base64,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" alt="" /></div>
                     <div><h1>Messanger-clone</h1></div>
                </div>
                <div className="content__container">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                         <div onClick={login} className="button">Continue With Google</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ragister
