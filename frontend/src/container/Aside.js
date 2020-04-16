import React from 'react';

const Aside = () => {
    return ( 
    <div class="aside">
        <div class="invoice"><a href="">Generate Invoice</a></div>
        <div class="main">Main</div> 
        <div class="overview">
            <p><i class="fas fa-envelope-open-text"></i>Overview</p>
        </div>
        <h2>Payments</h2>
        <ul>
            <li><a href="#"><i class="fas fa-box"></i>All Payments</a></li>
            <li><a href="#"><i class='far fa-credit-card'></i>Reconciled Payments</a></li>
            <li><a href="#"><i class='fas fa-credit-card'></i>Un-Reconciled Payments</a></li>
            <li><a href="#"><i class="fa fa-toggle-on"></i>Manual Settlement</a></li>
        </ul>
        <br/>
        <h2>Orders</h2>
        <ul>
            <li><a href="#"><i class="fas fa-window-maximize"></i>All orders</a></li>
            <li><a href="#"><i class="fas fa-list-alt"></i>Pending Orders</a></li>
            <li><a href=""><i class="fas fa-newspaper"></i>Reconciled Orders</a></li>
            <br/>
            <li><a href=""><i class='far fa-user'></i>Merchant Profile</a></li>
        </ul>
    </div> );
}
 
export default Aside;