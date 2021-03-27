
import React, {useState} from 'react'
import SideBarOption from './SideBarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import CreateIcon from '@material-ui/icons/Create';
import starterData from '../starterData'
import '../Sidebar.css'

export default function SideBar() {
    const [channels, setChannels] = useState([])
    
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                        <h2>Si3mshady SlackClone</h2>
                        <h3>
                            <FiberManualRecordIcon  />
                            Elliott Arnold
                        </h3>
                </div>
                
            <CreateIcon />   
            
            </div>           
            <SideBarOption Icon={InsertCommentIcon} title="Threads" />       
            <SideBarOption Icon={InboxIcon} title="Inbox" /> 
            <SideBarOption Icon={NewReleasesIcon} title="New Release" /> 
            <SideBarOption Icon={LiveTvIcon} title="LiveTV" /> 
            <SideBarOption Icon={LocalAtmIcon} title="CashTalk" /> 
            <SideBarOption Icon={SportsGolfIcon} title="Golf 24/7" /> 
            <SideBarOption Icon={SportsKabaddiIcon} title="ESPN" /> 
            <SideBarOption Icon={ExpandLessIcon} title="Show Less" /> 

            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Channels" />            
             
            
            <hr />
            {starterData.map(channel => (<SideBarOption title={channel.name} /> ))}
            
        </div>
    )
}



// {
//     "rules": {
//       ".read": "now < 1619326800000",  // 2021-4-25
//       ".write": "now < 1619326800000",  // 2021-4-25
//     }
//   }