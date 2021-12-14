import React,{useState} from 'react'
import  ExpenseItem from './ExpenseItem.js'
 
import './Expenses.css'

import Card from '../Ui/Card'

import ExpensesFilter from './ExpensesFilter'

import ExpenseChart from './ExpenseChart'





const Expenses = (props) => {

const [filterYear, setFilterYear] = useState('2021')

    const onSaveCtoPcall_expePerant_to_ExpFilterChild=(selected_e)=>{
        console.log(selected_e);
        setFilterYear(selected_e);
    }



// year filter 
    const filterExpenses=  props.expenses.filter((item)=>{
        return item.date.getFullYear().toString() === filterYear;
    })


    return (

        <div>
        <Card className="expenses">


        <ExpensesFilter   
        filterYear={filterYear}  // state pass ki ExpFilter.js ko
        onSaveCtoPcall_expePerant_to_ExpFilterChild={onSaveCtoPcall_expePerant_to_ExpFilterChild}   // i'm parent compo & pass data to child
        />



        <ExpenseChart filterExpenses={filterExpenses} />


        {/* agr length 0 hai to true yani <P> tag chaly other wise false wali items hai wala chaly */}
            {filterExpenses.length === 0 ? (<p>No Item Here! </p>) : (
                filterExpenses.map((expense)=>(
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                     />
           ))
        )}

{/* {props.expenses */}
{/* {filterExpenses.map((expense)=>(
         <ExpenseItem 
         key={expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
          />
))} */}

            {/* <ExpenseItem 
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
       />
    <ExpenseItem 
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
       />

    <ExpenseItem 
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
       />


<ExpenseItem 
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
       /> */}


        </Card>
          
</div>
    )
}

export default Expenses;
