import React, {useState, useEffect} from 'react'
import Message from './Message'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useParams }  from 'react-router-dom'
import Axios from 'axios'
import "../Chat.css"

export default function Chat() {

    const  {roomID} = useParams();  // must coincide with the variable used in path route
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

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
            <h2>You are in room: {roomID}</h2>

            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                    

                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoIcon /> Details
                    </p>

                </div>


            </div>


            <div className="messages">
                   <Message 
                    userImage="https://i.pinimg.com/600x315/d2/32/98/d23298e8be6b9f7aa533e283228c4c2b.jpg"
                    message="Great film"
                    user="si3mshady"

                    


                   />

            </div>
        </div>
    )
}
