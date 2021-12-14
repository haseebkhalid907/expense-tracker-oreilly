import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'

import Card from '../Ui/Card'



const ExpenseItem = (props) => {
  return (
    <>

    <Card className="expense-item">
      <ExpenseDate date={props.date}/>   
      {/* ExpenseDate main data k name se date props se pass kare gy ExpenseDate main get karen gy props.data kar k  */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </>
  );
};

export default ExpenseItem;
