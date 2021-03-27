import React from 'react'
import '../SidebarOption.css'

export default function SideBarOption({Icon, title}) {
    
    return (
        <div className="sidebarOption">

            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon  ? (<h3>{title}</h3>) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span>
                    {title}
                </h3>
             )}            
        </div>
    );
}
