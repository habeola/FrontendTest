import React from 'react';
import vector from '../img/vector.png';

const Widget = (props) => {

    const p = props.dailyTransact; 


    return ( 
    <div className="widget">
        <div>
            <img src={vector} alt="vector"/>
            Daily Transaction Volume<br/>
            <span >{p.dailyTransactVolOne} </span>
        </div>   
        <div>
            <img src={vector} alt="vector"/>
            Daily Transaction Value<br/>
            <span>{p.dailyTransactValueOne} </span>                
        </div>                 
        <div>
            <img src={vector} alt="vector" />
            Daily Transaction Volume <br />
            <span>{p.dailyTransactVolTwo}</span>                  
        </div>
        <div>
            <img src={vector} alt="vector" />
            Daily Transaction Value<br />
            <span>{p.dailyTransactValueTwo}</span>
        </div>
    </div> 
    );
}
 
export default Widget;