import React, {useState, useEffect} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useParams }  from 'react-router-dom'
import Axios from 'axios'
import "../Chat.css"

export default function Chat() {

    const  {roomID} = useParams();  // must coincide with the variable used in path route
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => { 

     const url = "http://localhost:9000/v1/channels/getChannelDetail"
        Axios.post(url, { name: roomID  }).then(res => {
            console.log('Feteched from room details')
            const details = res.data
            setRoomDetails(details)
          })     

    },[roomID])


    return (
        <div className="chat">
            <h2>You are in room:{roomID}</h2>

            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails.name}</strong>
                        <StarBorderIcon />
                    </h4>
                    

                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoIcon /> Details
                    </p>

                </div>


            </div>
        </div>
    )
}
