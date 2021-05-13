import React from 'react';
import Card from '../Card/Card';
import './Body.css';


const Body = ({current})=>{
    delete current.condition;
    const keys = Object.keys(current);
    const values = Object.values(current);

    const weatherlist = keys.map((element,i)=>{
        return {key:keys[i],value:values[i]};
    });
    const data = weatherlist.map((item,i)=>{
        return <Card key={i} head={item.key} value={item.value}/>
    })
    return(
        <div className='cards'>
            {data}
        </div>
    );
}

export default Body;