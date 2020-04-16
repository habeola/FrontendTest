import React from 'react';
import Widget from '../contentComponents/Widget';
import Chart from '../contentComponents/Chart';
import Table from '../contentComponents/Table';
import axios from 'axios';

let one = "https://my.api.mockaroo.com/table_data_set.json?key=0659c400"
let two = "https://my.api.mockaroo.com/orders_and_payment.json?key=0659c400"
let three = "https://my.api.mockaroo.com/dailytransact.json?key=0659c400"

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

class Content extends React.Component { 
    state = { 
        dummydata: [],
        orderAndPayment: [],
        dailyTransact: []
     }
    
     componentDidMount(){
         axios.all([requestOne, requestTwo, requestThree])
         .then(axios.spread((...responses) => {
             const responseOne = responses[0]
             const responseTwo = responses[1]
             const responseThree = responses[2]

             this.setState({
                 dummydata: responseOne.data
             })
             this.setState({
                 orderAndPayment: responseTwo.data
             })
             this.setState({ 
                 dailyTransact: responseThree.data
             })
             
         })
         ).catch(error => {
             console.error(error)
         });
      } 
    render() { 
        return ( 
            <div className="content">
                <Widget dailyTransact={this.state.dailyTransact}/>
                <Chart orderAndPayment={this.state.orderAndPayment}/>
                <Table dummydata={this.state.dummydata}/>              
            </div> 
         );
    }
}
 
export default Content;