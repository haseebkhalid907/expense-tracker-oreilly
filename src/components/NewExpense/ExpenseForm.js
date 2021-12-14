import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, settitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState()






    const handleTitleChange=(e)=>{
        return  settitle(e.target.value);
        // console.log(e.target.value)
    }

    const handleAmountChange=(e)=>{
        return  setAmount(e.target.value);
        // console.log(e.target.value)

    }


    const handleDateChange=(e)=>{
        return  setDate(e.target.value);
        // console.log(e.target.value)

    }


    const handleSubmit=(e)=>{
        e.preventDefault();


        const enteredAllExpenseDateStateSaveObj = {
            //left side names for my choose and right side is useState data name
            title: title,
            amount: amount,
            date: new Date(date),
        }
        

        // () k under jo data enter kia wo parent main ab get kar sakty hain... event k tor py
        props.onSaveCtoPcall_NewExPerant_to_ExFormChild(enteredAllExpenseDateStateSaveObj)
        console.log(enteredAllExpenseDateStateSaveObj);

        settitle("");
        setAmount(0);
        setDate("");
    }

    const closeModal=()=>{
       return props.setModal(false)
    }



    return (
            <form  onSubmit={handleSubmit} >
                <div className="new-expense__controls">
                        
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text"   value={title}  onChange={handleTitleChange} />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={handleAmountChange} />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date"   value={date}  onChange={handleDateChange} />
                    </div>

                </div>


                    <div className="new-expense__actions">

                    <a type="button"  onClick={closeModal} >Close</a>
                        <button type="submit" >Add Expense</button>
                    </div>

            </form>
    )
}

export default ExpenseForm
