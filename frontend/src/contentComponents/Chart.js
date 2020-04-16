import React from 'react';
import gradient from '../img/gradient.jpg';

const Chart = (props) => {

    const p = props.orderAndPayment;

    return ( 
        <div className="column">
                <div className="chart-box">
                    <div className="wrap">
                        <div className="date"><b>Today: 5, Aug 2018</b></div>
                            <div className="mth">
                                <div className="mth-diff">1 Jan - 1 Jun</div>
                            </div>
                            <span id="left-pointer"><i className='fa fa-angle-left'></i></span>
                            <span id="right-pointer"><i className='fa fa-angle-right'></i></span>
                    </div>
                    <div className="chart-table">
                        <div className="mth-list">
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
                <div className="summary">
                    <div className="order">Orders</div>            
                    <ul>
                        <li>Pending Orders: <span>{p.pending_order}</span></li>
                        <li>Reconcile Orders: <span>{p.reconcile_order}</span></li>
                        <li>Total Orders: <span>{p.total_order}</span></li>
                    </ul>
                    <br />
                    <br />
                    <div className="payment">Payments</div>
                    <ul>
                        <li>Un-reconciled Payments: <span>{p.unreconciledPayment}</span></li>
                        <li>Reconcile Payments: <span>{p.reconcilePayment}</span></li>
                        <li>Total Payments: <span>{p.total_payment}</span></li>
                    </ul>
                </div>
            </div>
     );
}
 
export default Chart;