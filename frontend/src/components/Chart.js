import React from 'react';
import gradient from '../img/gradient.jpg';

const Chart = () => {
    return ( 
        <div class="column">
                <div class="chart-box">
                    <div class="wrap">
                        <div class="date"><b>Today: 5, Aug 2018</b></div>
                            <div class="mth">
                                <div class="mth-diff">1 Jan - 1 Jun</div>
                            </div>
                            <span id="left-pointer"><i class='fa fa-angle-left'></i></span>
                            <span id="right-pointer"><i class='fa fa-angle-right'></i></span>
                    </div>
                    <div class="chart-table">
                        <div class="mth-list">
                            <div>Jan</div>
                            <div>Feb</div>
                            <div>Mar</div>
                            <div>April</div>
                            <div>May</div>
                            <div>June</div>
                        </div>
                        <div>
                        </div>
                            <img src={gradient} alt="pics"/>
                        </div> 
                </div>
                <div class="summary">
                    <div class="order">Orders</div>            
                    <ul>
                        <li>Pending Orders: 20</li>
                        <li>Reconcile Orders: 80</li>
                        <li>Total Orders: 100</li>
                    </ul>
                    <br />
                    <br />
                    <div class="payment">Payments</div>
                    <ul>
                        <li>Un-reconciled Payments: 20</li>
                        <li>Reconcile Payments: 80</li>
                        <li>Total Payments: 100</li>
                    </ul>
                </div>
            </div>
     );
}
 
export default Chart;