import React from 'react'
import './ExpensesFilter.css'


const ExpensesFilter = (props) => {


    const filterChartStatus=(e)=>{
      console.log(e.target.value);
      props.onSaveCtoPcall_expePerant_to_ExpFilterChild(e.target.value);
   
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>
                    Filter by Years
                </label>
                
                

        {/* ya value expense.js se ai  */}
<select value={props.filterYear} onChange={filterChartStatus}>
    <option value='2026'>2026</option>
    <option value='2025'>2025</option>
    <option value='2024'>2024</option>
    <option value='2023'>2023</option>  
    <option value='2022'>2022</option>
    <option value='2021'>2021</option>
    <option value='2020'>2020</option>
    <option value='2019'>2019</option>
    <option value='2018'>2018</option>
    <option value='2017'>2017</option>

</select>
            </div>
        </div>
    )
}

export default ExpensesFilter
