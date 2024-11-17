import React from 'react';
import classes from "./ProductCard.module.css";

export default function ProductCard({data, onClick, btnLabel, customBtnStyle}) {

  return (
    <div className={classes.card}>
        <img src={data?.image} alt={data?.name} className={classes.image} />
        <div className={classes.cardBody}>
            <h6>{data?.title}</h6>
            {/* <p>{data?.description}</p> */}
            <p>Price: ${data?.price}</p>
        </div>
        <button className={classes.btn} style={{...customBtnStyle}} onClick={onClick}>{btnLabel}</button>
    </div>
  )
}
