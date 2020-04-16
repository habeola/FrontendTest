import React from 'react';
import ava2 from '../img/ava2.jpg';

const Topnav = () => {
    return (
        <div class="topnav">
            <h1>TransMonitor</h1>
            <span id="search-wrap"><a href="#"><i class="fa fa-search"></i></a>
                <input type="text" placeholder="search" name="search"/>
            </span>
            <div class="support"><a href="">Support</a></div>
            <div class="faq"><a href="">FAQ</a></div>
            <span id="notification"><a href="">
                <i class="fa fa-bell"></i><span id="badge">8</span></a>       
            </span>
            <div class="username">
                <div class="greeting">Hello
                <p class="username">Oluwaleke Ojo</p>
                </div>
            </div>
            <img src={ava2} alt="profile-pics" />
        </div>
     );
}
 
export default Topnav;