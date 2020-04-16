import React from 'react';
import vector from '../img/vector.png';

const Widget = () => {
    return ( 
    <div class="widget">
        <div>
            <img src={vector}/>
            Daily Transaction Volume<br/>2,342 
        </div>   
        <div>
            <img src={vector} />
            Daily Transaction Value<br/>#4,000                  
        </div>
        <div>
            <img src={vector} />
            Daily Transaction Volume <br />425,000                     
        </div>
        <div>
            <img src={vector} />
            Daily Transaction Value<br />2,342
        </div>
    </div> 
    );
}
 
export default Widget;