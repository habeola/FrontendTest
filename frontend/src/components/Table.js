import React from 'react';
import vw from '../img/vw.png';

const Table = () => {
    return ( 
        <React.Fragment>
            <h2 class="title">Payments</h2>
                <div class="label-wrap">
                    <div class="col-1">Showing</div>
                        <div class="col-2">20 <span><i class="fa fa-angle-down"></i></span></div>
                        <div class="col-3">Out of 500 Payments</div>
                        <div class="search-wrap">
                            <span class="search-icon"><i class="fa fa-search"></i></span>
                            <input type="text" class="search-panel" placeholder="search payments"/>
                        </div>
                    <div class="show">Show</div>
                    <select>
                        <option>All</option>
                        <option>Reconcile</option>
                        <option>Un-reconcile</option>
                        <option>Settled</option>
                        <option>Unsettled</option>
                    </select>
                </div>
                <div class="table-container">
                    <table class="table">
                        <tr>
                            <th></th>
                            <th>Item Type</th>
                            <th>Price</th>
                            <th>Transaction No</th>
                            <th>Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em1"><span class="dot1"></span>Reconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em2"><span class="dot2"></span>Pending</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>           
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em1"><span class="dot1"></span>Reconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td> 
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em1"><span class="dot1"></span>Reconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em2"><span class="dot2"></span>Pending</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em3"><span class="dot3"></span>Unreconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em1"><span class="dot1"></span>Reconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em3"><span class="dot3"></span>Unreconciled</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                        <tr>
                            <td id="col1"><img src={vw} /></td>
                            <td >Apple Mac Book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td id="col5"><span class="em2"><span class="dot2"></span>Pending</span></td>
                            <td id="col6"><span id="down-pointer"><i class="fa fa-angle-down"></i></span></td>
                        </tr>
                    </table>
                </div >
                    <div class="bottom-label">
                        <div class="showing"> Showing 1 to 10 of 500 entries</div>
                        <div class="pagination">
                            <div class="previous"><a href="#">Previous</a></div>
                            <div class="one">1</div>
                            <div class="two">2</div>
                            <div class="next"><a href="#">Next</a></div>
                        </div>
                    </div>
                </React.Fragment>
     );
}
 
export default Table;