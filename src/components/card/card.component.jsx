import React from 'react';
import './card.styles.css'

export const Card=(props)=>{
    const {monister}=props;
    return <div className="card-cotainer">
        <img src={`https://robohash.org/${monister.id}?set=set2`}/>
        <h2 key={monister.id}>{monister.name}</h2>
        <span>{monister.email}</span>
    </div>
}
