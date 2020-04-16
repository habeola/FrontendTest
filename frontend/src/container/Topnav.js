import React from 'react';
import ava2 from '../img/ava2.jpg';

const Topnav = () => {
    return (
        <div className="topnav">
            <h1>TransMonitor</h1>
            <span id="search-wrap"><a href={undefined}><i className="fa fa-search"></i></a>
                <input type="text" placeholder="search" name="search"/>
            </span>
            <div className="support"><a href={undefined}>Support</a></div>
            <div className="faq"><a href={undefined}>FAQ</a></div>
            <span id="notification"><a href={undefined}>
                <i className="fa fa-bell"></i><span id="badge">8</span></a>       
            </span>
            <div className="username">
                <div className="greeting">Hello
                <p className="username">Oluwaleke Ojo</p>
                </div>
            </div>
            <img src={ava2} alt="profile-pics" />
        </div>
     );
}
 
export default Topnav;