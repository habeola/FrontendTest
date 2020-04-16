import React from 'react';
import Tabledata from '../components/Tabledata'

class Table extends React.Component {
    render() {
        const p = this.props;

    return ( 
        <React.Fragment>
            <h2 className="title">Payments</h2>
                <div className="label-wrap">
                    <div className="col-1">Showing</div>
                        <div className="col-2">20 <span><i className="fa fa-angle-down"></i></span></div>
                        <div className="col-3">Out of 500 Payments</div>
                        <div className="search-wrap">
                            <span className="search-icon"><i className="fa fa-search"></i></span>
                            <input type="text" className="search-panel" placeholder="search payments"/>
                        </div>
                    <div className="show">Show</div>
                    <select>
                        <option>All</option>
                        <option>Reconcile</option>
                        <option>Un-reconcile</option>
                        <option>Settled</option>
                        <option>Unsettled</option>
                    </select>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Type</th>
                                <th>Price</th>
                                <th>Transaction No</th>
                                <th>Time</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {p.dummydata.map(item => <Tabledata key={item.id}
                    product={item} />)}                     
                    </table>
                </div >
                    <div className="bottom-label">
                        <div className="showing"> Showing 1 to 10 of 500 entries</div>
                        <div className="pagination">
                            <div className="previous"><a href={undefined}>Previous</a></div>
                            <div className="one">1</div>
                            <div className="two">2</div>
                            <div className="next"><a href={undefined}>Next</a></div>
                        </div>
                    </div>
                </React.Fragment>
     );
    }
}
 
export default Table;