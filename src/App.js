import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState} from 'react'



  const DUMMY_STATE = [
    {
      id:'e1',
      title:'New Desk (wooden)',
      amount:32,
      date : new Date(2017,5,11),
  },
  {
    id:'e2',
    title:'Leptop',
    amount:111,
    date : new Date(2017,6,12),
  },
  {
  id:'e3',
  title:'Car',
  amount:44,
  date : new Date(2021,1,2),
  },
  {
  id:'e4',
  title:'Some Data',
  amount:500,
  date : new Date(2021,2,29),
  },
  {
  id:'e5',
  title:'Mobile',
  amount:434,
  date : new Date(2021,3,22),
  },
  {
  id:'e6',
  title:'Leptop',
  amount:134,
  date : new Date(2021,5,24),
  },,
  {
  id:'e7',
  title:'Car',
  amount:434,
  date : new Date(2022,7,22),
  },
  {
  id:'e8',
  title:'Car',
  amount:434,
  date : new Date(2022,10,2),
  },
  {
  id:'e9',
  title:'Car',
  amount:434,
  date : new Date(2022,9,12),
  },
  {
  id:'e10',
  title:'Car',
  amount:434,
  date : new Date(2021,7,22),
  },
  ]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_STATE)

  //parant func 
  // event k tor py hum child se data get kar sakty hain .... kiuo k child main wo pass kia hai hum ny yaha func bana k 
  const onSaveCtoPcall_AppFunc_to_NewExChild=(e)=>{
    console.log(e);
    setExpenses([e , ...expenses])
  }

  return (
    <div className="App">
      <h1>Expanse Tracker By im_seeb.</h1>

    
<NewExpense onSaveCtoPcall_AppFunc_to_NewExChild={onSaveCtoPcall_AppFunc_to_NewExChild}   />
<Expenses expenses={expenses} />

    </div>
  );
}

export default App;
