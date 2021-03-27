import React from 'react'
import { useParams }  from 'react-router-dom'
import "../Chat.css"

export default function Chat() {
    const  {roomID} = useParams();  // must coincide with the variable used in path route
    return (
        <div className="chat">
            <h2>You are in room:{roomID}</h2>

            <div className="chat__header">
                <div className="chate__headerLeft">

                        


                </div>

                <div className="chate__headerRight"></div>


            </div>
        </div>
    )
}
