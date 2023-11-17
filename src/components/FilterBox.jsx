import { useEffect, useState } from 'react';
import './FilterBox.css'

const FilterBox=({getDateYear})=>{
  const [selectedMonth,setSelectedMonth]=useState('January');
  const [selectedYear,setSelectedYear]=useState(2023);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = [2023,2024];
  
  const updateParent = () => {
    getDateYear(selectedMonth, selectedYear);
  };
  const handleMonthChange=(event)=>{
    setSelectedMonth(event.target.value);
  }
  const handleYearChange = (event)=>{
    setSelectedYear(parseInt(event.target.value),10);
  }
  const submitEventTimings=(e)=>{
    e.preventDefault();
    updateParent()
  }
  useEffect(()=>{
    updateParent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='card'>
    <form onSubmit={submitEventTimings}>
     <label htmlFor="month">Month:</label>
     <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        {
            months.map((month,index)=>{
              return(<option key={index} value={month}>
                {month}
              </option>)
            })
        }
     </select>
     <label htmlFor="year">Year:</label>
     <select id="year" value={selectedYear} onChange={handleYearChange}>
        {
            years.map((year,index)=>{
                return(
                    <option key={index} value={year}>
                        {year}
                    </option>
                )
            })
        }
     </select>
     <button>Find Events</button>
     </form>
    </div>
  )
}

export default FilterBox
