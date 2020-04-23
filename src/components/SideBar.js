import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="list">
                <li className="list-item"><a href="#"><i className="fa fa-desktop"></i><span>Projects</span></a></li>
                <li className="list-item"><a href="#"><i className="fa fa-server"></i><span>Server</span></a></li>
                <li className="list-item"><a href="#"><i className="fa fa-calendar"></i><span>Calendar</span></a></li>
                <li className="list-item"><a href="#"><i className="fa fa-envelope-o"></i><span>Messages</span></a></li>
                <li className="list-item"><a href="#"><i className="fa fa-table"></i><span>Data Table</span></a></li>
            </ul>
        </div>
    )
}

export default SideBar;