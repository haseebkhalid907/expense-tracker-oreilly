import React from 'react'
import './Card.css'

const Card = (props) => {

    // nichy div main jo className=card thi ab usY const classes main add kia or sath props.className yani props ki class bih use ho gi \
    // card k sath ak space bih dyni hai 
    const classes= 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card
