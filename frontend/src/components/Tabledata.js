import React from 'react';
import vw from '../img/vw.png';


class Tabledata extends React.Component {

    changeStyle() {
        const {status} = this.props.product;
        return status ==="Green"? {background: "Green"}:
        status ==="Crimson"? {background: "red"}: 
        status ==="Yellow"? {background: "yellow"}:
        status ==="Red"? {background: "red"}:
        status ==="Orange"? {background: "orange"}:{background: "blue"};
    };

    render() {
        const p = this.props;   

        return ( 
            <tbody>
                <tr>
                    <td id="col"><img src={vw} alt="vw"/></td>
                    <td id="row">{p.product.itemType}</td>
                    <td>{ p.product.price }</td>
                    <td>{ p.product.transactionNo}</td>
                    <td>{ p.product.time }</td>
                    <td id="col5"><span className="em1"><span style={this.changeStyle() } className="dot1" ></span>{p.product.status}</span></td>
                    <td id="col6"><span id="down-pointer"><i className="fa fa-angle-down"></i></span></td>
                </tr> 
            </tbody>      
        );      
    }
}
 
export default Tabledata;