import React from 'react';

const Aside = () => {
    return ( 
    <div className="aside">
        <div className="invoice"><a href={undefined}>Generate Invoice</a></div>
        <div className="main">Main</div> 
        <div className="overview">
            <p><i className="fas fa-envelope-open-text"></i>Overview</p>
        </div>
        <h2>Payments</h2>
        <ul>
            <li><a href={undefined}><i className="fas fa-box"></i>All Payments</a></li>
            <li><a href={undefined}><i className='far fa-credit-card'></i>Reconciled Payments</a></li>
            <li><a href={undefined}><i className='fas fa-credit-card'></i>Un-Reconciled Payments</a></li>
            <li><a href={undefined}><i className="fa fa-toggle-on"></i>Manual Settlement</a></li>
        </ul>
        <br/>
        <h2>Orders</h2>
        <ul>
            <li><a href={undefined}><i className="fas fa-window-maximize"></i>All orders</a></li>
            <li><a href={undefined}><i className="fas fa-list-alt"></i>Pending Orders</a></li>
            <li><a href={undefined}><i className="fas fa-newspaper"></i>Reconciled Orders</a></li>
            <br/>
            <li><a href={undefined}><i className='far fa-user'></i>Merchant Profile</a></li>
        </ul>
    </div> );
}
 
export default Aside;