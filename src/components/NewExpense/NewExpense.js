import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm.js';


import './NewExpense.css'


const NewExpense = (props) => {


const [modal, setModal] = useState(false)




const onSaveCtoPcall_NewExPerant_to_ExFormChild=(enteredAllExpenseDateInFormCompoAsEvent)=>{

    //object
    const expenseData = {
        ...enteredAllExpenseDateInFormCompoAsEvent,
        id:Math.random().toString(),
    }


    // () k under jo data enter kia wo parent main ab get kar sakty hain... event k tor py
    props.onSaveCtoPcall_AppFunc_to_NewExChild(expenseData)
    console.log(expenseData);

    // after add expense item close model 
    setModal(false)
}




    const modalShow=()=>{
        setModal(true)
    }



    return (
        <div className="new-expense">

           { !modal &&
               <button onClick={modalShow} >Add Item</button>
           }       
            {  modal &&
              <ExpenseForm   modal={modal}  setModal={setModal} onSaveCtoPcall_NewExPerant_to_ExFormChild={onSaveCtoPcall_NewExPerant_to_ExFormChild} />
            }

        </div>
    )
}

export default NewExpense
